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
(1, 'Nike', 'Air Max 1', 'Flax', 'Size?', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 129.99, 80, 'https://cms-cdn.thesolesupplier.co.uk/2017/09/Nike-Air-Force-1-High-07-LV8-Flax-03.png', 'Found this great deal!', 3),
(2, 'Adidas', 'Ultra Boost', 'Core Black', 'END Clothing', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 149.99, 90, 'https://www.prodirectrunning.com/ProductImages/Main/174267_Main_Thumb_0588917.jpg', 'Terrific!', 5),
(1, 'Nike', 'Air Force 1', 'White', 'Nike', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 119.99, 35, 'https://cache.mrporter.com/variants/images/666467151993137/fr/w2000_q80.jpg', 'Brilliant deal this is!', 6),
(2, 'Air Jordan', '11', 'Space Jam', 'Foot Patrol', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 99.99, 45, 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/lxrpbo94qpm9wvv21dx7/air-jordan-11-space-jam', 'Best DEAL ever', 9),
(3, 'Nike', 'Air Max 97', 'Green', 'Size?', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 119.99, 75, 'https://cms-cdn.thesolesupplier.co.uk/2018/04/Nike-Air-Max-97-Ultra-17-Barely-Green-AO2326-300-03.png', 'Brilliant deal this is!', 8),
(3, 'Adidas', 'NMD R1', 'Japan White', 'Adidas', 'https://www.nike.com/gb/t/air-max-1-g-golf-shoe-HfXLmR/CI7576-002', 99.99, 45, 'https://www.sneakers.tech/wp-content/uploads/2017/06/adidas-NMD-R1-Japanese-Triple-White-2.jpg', 'Best DEAL ever', 2)
;

INSERT INTO comments (user_id, post_id, comment, likes)
VALUES
(1, 1, 'Great deal!', 4),
(1, 2, 'Wonderful, thanks!', 12),
(2, 1, 'Grate', 9)
;