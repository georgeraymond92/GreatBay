var inquire = require("inquirer");
var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",


    // Your username

    user: "root",

    // Your password
    password: "",
    database: "Great-Bay"

})

connection.connect(function(err) {
if (err) throw err;
console.log ("connected as id" + connection.threadId);
connection.end();
});

