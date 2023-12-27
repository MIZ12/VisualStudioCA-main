/* 
* @autor: Tarq
* Add Comments 
* Methods implemented  
*/




const fs = require("fs");
const parse = require("csv-parse");

// Function to validate CSV data and insert valid records into the database
function processCSVData(connection) {
    // Reading the CSV data from the provided string
    const csvData = `"John, Doe",30,"johndoe@example.com, 0893216548, 1YR5DD"
"Jane, Smith","janesmith@example.com, 0892856548, 8MH7WE"
"Michael, Johnson","michaeljohnson@example.com, 0898523694, 7RP0RR"
"Tommy, Bean","michaeljohnson@example.com, 0894859612, EYR5DD"`;

    // Parsing the CSV data
    parse(csvData, { columns: true, trim: true }, (err, records) => {
        if (err) {
            console.error("Error parsing CSV:", err);
            return;
        }

        // Iterate through each record and validate
        records.forEach((record, index) => {
            if (validateRecord(record)) {
                // If the record is valid, insert it into the database
                insertRecord(connection, record);
            } else {
                // If the record is invalid, log an error
                console.error(`Validation failed for record at index ${index}:`, record);
            }
        });
    });
}

// Function to validate a single CSV record
function validateRecord(record) {
    // Add your validation logic here
    // For example, check if required fields are present, data types are correct, etc.
    return true; // Replace with your validation criteria
}

// Function to insert a valid record into the MySQL database
function insertRecord(connection, record) {
    // Use the connection object to execute the INSERT query
    connection.query('INSERT INTO mysql_table SET ?', record, (error, results, fields) => {
        if (error) {
            console.error("Error inserting record into the database:", error);
        } else {
            console.log("Record inserted successfully:", record);
        }
    });
}

module.exports = processCSVData;
