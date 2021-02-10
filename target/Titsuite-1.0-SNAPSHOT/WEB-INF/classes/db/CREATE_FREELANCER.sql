CREATE TABLE FREELANCER (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(255),
    birth_date DATE,
    city VARCHAR(255),
    street VARCHAR(255),
    activity VARCHAR(255),
    minimum_wage NUMBER(38, 2)
)