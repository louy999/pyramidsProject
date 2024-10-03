/* Replace with your SQL commands */
CREATE TABLE offer(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    type VARCHAR(250) NOT NULL,
    project_id uuid REFERENCES project(id),
    floor VARCHAR(250) NOT NULL,
    unit_space VARCHAR(250) NOT NULL
)