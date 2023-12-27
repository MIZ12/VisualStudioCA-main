// databaseTest

// Import the required MySQL package
var mysql = require("mysql");

// Create a connection pool to handle multiple connections
var pool = mysql.createPool({
    connectionLimit: 10, // Adjust the limit based on your requirements
    host: "localhost",
    database: "mysql_db",
    user: "root",
    password: "password"
});

// Export a function that takes care of handling database queries
module.exports = function (app) {
    // Define a route to retrieve data from the "mysql_table"
    app.get("/", function (req, res) {
        // Acquire a connection from the pool
        pool.getConnection(function (err, connection) {
            if (err) {
                throw err;
            }

            // Use the acquired connection to execute a query
            connection.query('SELECT * FROM mysql_table', function (error, results, fields) {
                // Release the connection back to the pool
                connection.release();

                // Handle the results or any errors
                if (error) {
                    throw error;
                }

                // Send the results as a JSON response
                res.json(results);
            });
        });
    });
};
