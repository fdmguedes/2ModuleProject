const express = require("express");
const router = express.Router();
var parseString = require("xml2js").parseString;
const axios = require("axios");
const User = require("../models/User.model");

/* GET home page */
router.get("/sports", async (req, res, next) => {
  const currentUser = req.session.currentUser;
  console.log(currentUser);
  const response = await axios.get("http://feeds.ojogo.pt/OJ-Ultimas");
  const xml = response.data;
  let jsonResult;

  parseString(xml, function (err, result) {
    jsonResult = result.rss.channel[0];
    //console.dir(result.rss.channel);
  });

  console.log(jsonResult.item[0].enclosure);
  res.render("categories/sports", { sports: jsonResult.item, currentUser });
});

module.exports = router;
