var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name, req.body.devoured, function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var burgerID = req.params.id;
  var devoured = req.body.devoured;

  burger.updateOne(devoured, burgerID, function (result) {
    res.json(result);
  });
});
module.exports = router;
