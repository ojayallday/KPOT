const {Pool} =  require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'safpro',
    password: 'superadmin',
<<<<<<< HEAD
    port: 5433,
=======
    port: 5432,
>>>>>>> 107b3bd9944e31e54780e9b226e511c81d57d5d1
})
module.exports = {
    query: (text, params) => pool.query (text, params),
}