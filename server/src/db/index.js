const {Pool} =  require('pg');
const express =require('express');
const { config } = require('dotenv');
const pool = new Pool({
   // user: 'postgres',
  //   host: 'localhost',
  //  database: 'safpro',
 //   password: 'superadmin',
  //  port: 5433,

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})
module.exports = {
    query: (text, params) => pool.query (text, params),
}