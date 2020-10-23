from flask import Flask, jsonify, request, session
from flask_cors import CORS
from flask_session import Session
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from passlib.hash import pbkdf2_sha256 as pw
from flask_sqlalchemy import SQLAlchemy
from helpers import format_resp
from dotenv import load_dotenv
import requests
import os
load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = os.getenv("SECRET")
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URI")
# app.config['JWT_TOKEN_LOCATION'] = ['headers', 'query_string']
jwt = JWTManager(app)
Session(app)

# ENV = 'prod'

# if ENV == 'dev':
    # app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URI")
# else:
#     app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://fljqfwclscahjt:410eeae48d75a9a7520d58c53a8ecb7590b92c46e37974c6e7b33f1e786d6033@ec2-34-197-212-240.compute-1.amazonaws.com:5432/ddq3o01kksfm47'

db = SQLAlchemy(app)

@app.route('/', methods=['GET'])
def running():
    return jsonify('Flask Server Running')


@app.route('/register', methods=['POST'])
def register():
    details = request.get_json()

    resultproxy = db.session.execute('SELECT * FROM users WHERE username = :1', { '1': details['username'] })
    response = format_resp(resultproxy)
    if (len(response) == 1):
        return jsonify("Username Taken"),401
    hash_pw = pw.hash(details['password'])
    resultproxy = db.session.execute('INSERT INTO users (username,hash) VALUES (:1, :2) RETURNING username, id', { '1': details['username'], '2':hash_pw })
    response = format_resp(resultproxy)
    db.session.commit()
    resp = {'username': response[0]['username'], 'status': 200}
    
    return jsonify(resp)

@app.route('/login', methods=['POST'])
def login():
    details = request.get_json()
    resultproxy = db.session.execute('SELECT * FROM users WHERE username = :1',{ '1': details['username'] })
    response = format_resp(resultproxy)

    if len(response) == 0:
        return jsonify('User Does Not Exist'),401
    else:
        if (pw.verify(details['password'], response[0]['hash'])):
            token = create_access_token(identity=response[0]["id"], expires_delta=False)
            return jsonify(token = token),200
        else:
            return jsonify("Password Incorrect"), 401

@app.route('/dashboard', methods=['GET'])
@jwt_required
def dashboard():
    if request.method == 'GET':
        user_id = get_jwt_identity()
        username = db.session.execute('SELECT username FROM users WHERE id = :1', { '1': user_id })
        username_val = format_resp(username)
        posts = db.session.execute('SELECT * FROM posts WHERE user_id = :1 ORDER BY datetime', { '1': user_id })
        posts_val = format_resp(posts)
        if len(posts_val) == 0:
            posts_val = ['No posts']
        dashboard = { 'username':username_val, 'posts':posts_val }
        return jsonify(dashboard),200

@app.route('/posts/', methods=['GET', 'POST'])
@jwt_required
def posts():
    if request.method == 'GET':
        posts = db.session.execute('SELECT * FROM posts ORDER BY datetime')
        # SELECT users.username FROM users, posts INNER JOIN posts ON users.id = posts.user_id
        # SELECT posts.user_id FROM posts INNER JOIN users ON users.id = posts.user_id
        posts_val = format_resp(posts)
        if len(posts_val) == 0:
            posts_val = ['No posts']
        dashboard = { 'posts':posts_val }
        return jsonify(dashboard),200
    if request.method == 'POST':
        user_id = get_jwt_identity()
        add_post = request.get_json()
        db.session.execute('INSERT INTO posts (user_id, brand, sneaker, colourway, store, deal_url, retail_price, discount_price, picture_url, description, likes) VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11)', { '1': user_id, '2': add_post['brand'], '3': add_post['sneaker'], '4': add_post['colourway'], '5': add_post['store'], '6': add_post['deal_url'], '7': add_post['retail_price'], '8': add_post['discount_price'], '9': add_post['picture_url'], '10': add_post['description'], '11': 0 })
        db.session.commit()
        return jsonify('Post added'),200

app.run(debug=False)