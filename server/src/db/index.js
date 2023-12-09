const {Pool} =  require('pg');
const express =require('express');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'safpro',
    password: 'superadmin',
    port: 5433,

})
module.exports = {
    query: (text, params) => pool.query (text, params),
}