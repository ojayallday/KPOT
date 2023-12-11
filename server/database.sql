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
    id SERIAL PRIMARY KEY NOT NULL,
    project_desc VARCHAR(255),
    po INTEGER NOT NULL,
    region VARCHAR NOT NULL,
    partner VARCHAR(32),
    msp VARCHAR(32),
    assigned_engineer VARCHAR,
    open_status VARCHAR,
    oac_date DATE,
    fac_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE engineers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE partners(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE msp(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)

);

