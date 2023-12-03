--Create Database
CREATE DATABASE safpro

-- user table
CREATE TABLE users(
    user_id serial primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date

);

--projects table

CREATE TABLE projects (
    id SERIAL NOT NULL,
    description VARCHAR(255),
    po INTEGER PRIMARY KEY NOT NULL,
    region VARCHAR NOT NULL,
    partner VARCHAR(32),
    msp VARCHAR(32)
    assigned_engineer VARCHAR,
    status VARCHAR,
    oac_date DATE,
    fac_date DATE,
    priority INT NOT NULL check(priority >= 1 and priority <=5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE engineers(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    role VARCHAR
);

CREATE TABLE partners(
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE msp(
    id SERIAL PRIMARY KEY,
    name VARCHAR
);