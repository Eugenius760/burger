var mysql = require("mysql");
require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'burgers_db',
    })
};

// var connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: "burgers_db",
// });

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection