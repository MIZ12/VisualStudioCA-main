/* 
* @autor: Tarq
* Add Comments 
* Methods implemented   
*/



const express = require('express');
const mysql = require('mysql');
const processCSVData = require('./processCSVData');

const app = express();

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mysql_db'
});

// Pass the 'app' object to the processCSVData function to set up the route
processCSVData(pool);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

