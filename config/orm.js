var connection = require("./connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (table, burger_name, devoured, cb) {
    var queryString =
      "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger_name, devoured], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (table, devoured, id, cb) {
    var queryString = "UPDATE " + table + " SET devoured = ? WHERE id = ?";
    connection.query(queryString, [devoured, id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};
module.exports = orm;
