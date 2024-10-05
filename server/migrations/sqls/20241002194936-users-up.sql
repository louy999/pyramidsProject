/* Replace with your SQL commands */
CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(200) NOT NULL,
    password VARCHAR(250) NOT NULL,
    phone VARCHAR(250) NOT NULL UNIQUE
);