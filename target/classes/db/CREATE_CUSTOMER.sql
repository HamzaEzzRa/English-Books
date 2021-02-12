CREATE TABLE CUSTOMER (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(255),
    birth_date DATE,
    city VARCHAR(255),
    street VARCHAR(255),
    subscription VARCHAR(255) DEFAULT 'BASIC' CHECK (subscription in ('BASIC', 'PREMIUM')),
    refresh_token VARCHAR2(4000)
)