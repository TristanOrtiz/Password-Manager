const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Tristan705",
    host: "localhost",
    port: 5432,
    database: "PasswordManager"
});

module.exports = pool;