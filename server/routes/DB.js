const mysql = require('mysql');
//connect with db mysqlworkbench 

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'affan',
    database:'bank'
})

module.exports = db;