/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE project(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(250) NOT NULL UNIQUE,
    description TEXT,
    img TEXT,
    type TEXT [],
    price_meter TEXT [],
    meter_start TEXT [],
    delivery TEXT [],
    installment TEXT [],
    percentage TEXT [],
    rate_down TEXT [],
    batch boolean,
    distention VARCHAR(200)
)