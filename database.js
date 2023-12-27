/* 
* @autor: Adelia Acacio
* Added Comments for each piece of code
* Methods implemented to validate de CSV data provider from Kaoum  
*/


//the variable 'mysql' imports MySQL package to interact with the database
var mysql = require("mysql");

//The variable 'app' call the method 'mysql'
var app = mysql();

//The variable 'connection' create a connection to a MySQL database 
//The connection details specified by using the parameters host, database, user, and password
//these configuration should match with the information saved into the database
var connection = mysql.createConnection({
    host: "localhost", // database server
    database:"mysql_db", //name of MySQL database
    user:"root",
    password:"password"

})

app.get(`/`, function(req, res){

// Using the `connection` object to interact with the MySQL database
//To pull all information from the database table
connection.query('SELECT * FROM mysql_table', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  })

module.exports = connection;
//This allows other files to import the 'connection' object and use it to interact with the database(MySQL).

})