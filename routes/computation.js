var express = require("express");
var router = express.Router();
var no1;
var fround;
var random;
var round;

/* GET users listing. */

router.get("/", function (req, res, next) {
  no1 = Math.random() * (100 - 1) + 1;
  no2 = Math.random() * (100 - 1) + 1;

  fround = Math.fround(no1, no2);

  random = Math.random(no1);

  round = Math.round(no1);

  res.send(`(fround)  to (${no1}, ${no2}) is ${fround} <br>

            (random)  to (${no1}) is ${random} <br>

            (round)  to (${no1}) is ${round}`);
});

module.exports = router;