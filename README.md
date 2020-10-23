# Solo-Project

## Description
A community driven outlet for sneakerheads to find the latest and most popular deals and restocks.

## Instructions
#### Local Version
    - ### First Time Setup Instructions
        - #### Prerequisites
            - [Node.js](https://nodejs.org/en/)
            - [PostgreSQL 12+](https://www.postgresql.org/)
            - [Python 3.8+](https://www.python.org/)
            - [Pip](https://pypi.org/project/pip/) (to install pipenv)
            - [Pipenv](https://pypi.org/project/pip/)
        - Fork and Clone This Repository
        - Create a database in PostgreSQL
        - Seed the database with the contents of `/db/seed.sql`
        - In `/server` create a file called `.env`
        - Inside `.env`:
            - Add `DATABASE_URI = {Your DataBase Local SQLAlchemy URI}` (Check [these docs](https://docs.sqlalchemy.org/en/13/core/engines.html#postgresql) for more info)
            - Add `SECRET = {Any String (This is not suitable practise for production!)}`
        - In the terminal `cd` into `\server` and run `pipenv install -r requirements.txt`
        - In the terminal `cd..` then `cd` into `\client` and run `npm install`
    - ### Regular Running (After first time setup)
        - Open two terminals
        - #### Terminal 1
            - `cd` into `\server`
            - Run `pipenv shell`
            - Run `python app.py`
            - NOTE: When finished, kill server with `CTRL+C` twice and the run `exit` before closing terminal
        - #### Terminal 2
            - `cd` into `\client`
            - Run `npm start`
            - NOTE: When finished, kill server with `CTRL+C` twice before closing terminal
