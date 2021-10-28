var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Abhinav Bellamkonda",

    fact: "I'm a big VP from AP"

  });

});



module.exports = router;