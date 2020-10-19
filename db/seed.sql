DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(255),
    hash varchar(255)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    brand varchar(255),
    sneaker varchar(255),
    colourway varchar(255),
    store varchar(255),
    deal_url varchar(500),
    retail_price FLOAT,
    discount_price FLOAT,
    picture_url varchar(500),
    description varchar(5000),
    likes FLOAT,
    datetime TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(0)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    comment varchar(1000),
    likes INT
);

INSERT INTO users (username, hash)
VALUES 
('user1', '$pbkdf2-sha256$29000$NuZ8730PYUwJoRTi/B.jVA$DTvAfa3HLFh8dpgzGQO7yKN7ZciSM/HL5kQr7w6VYY0'),
('user2','$pbkdf2-sha256$29000$NuZ8730PYUwJoRTi/B.jVA$DTvAfa3HLFh8dpgzGQO7yKN7ZciSM/HL5kQr7w6VYY0'),
('user3','$pbkdf2-sha256$29000$NuZ8730PYUwJoRTi/B.jVA$DTvAfa3HLFh8dpgzGQO7yKN7ZciSM/HL5kQr7w6VYY0')
;

INSERT INTO posts (user_id, brand, sneaker, colourway, store, deal_url, retail_price, discount_price, picture_url, description, likes)
VALUES 
(1, 'Nike', 'Air Max 1', 'Flax', 'Size?', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 129.99, 80, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Found this great deal!', 3),
(2, 'Adidas', 'Ultra Boost', 'Core Black', 'END Clothing', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 149.99, 90, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Terrific!', 5),
(1, 'Nike', 'Air Force 1', 'White', 'Nike', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 119.99, 35, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Brilliant deal this is!', 6),
(2, 'Air Jordan', '11', 'Space Jam', 'Foot Patrol', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 99.99, 45, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Best DEAL ever', 9),
(3, 'Nike', 'Air Max 97', 'Green', 'Size?', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 119.99, 75, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Brilliant deal this is!', 8),
(3, 'Adidas', 'NMD R1', 'Japan White', 'Adidas', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 99.99, 45, 'https://stockx.imgix.net/Nike-Air-Max-1-London.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583909335', 'Best DEAL ever', 2)
;

INSERT INTO comments (user_id, post_id, comment, likes)
VALUES
(1, 1, 'Great deal!', 4),
(1, 2, 'Wonderful, thanks!', 12),
(2, 1, 'Grate', 9);