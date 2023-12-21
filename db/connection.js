require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "h",
    database: "employee_tracker_sql",
});
module.exports = connection;