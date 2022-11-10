const express = require("express");
const router = express.Router();
var parseString = require("xml2js").parseString;
const axios = require("axios");
const User = require("../models/User.model");

/* GET home page */
router.get("/", async (req, res, next) => {
  const currentUser = req.session.currentUser;
  // console.log(currentUser);
  const response = await axios.get("http://feeds.jn.pt/JN-Ultimas");
  const xml = response.data;
  let jsonResult;

  parseString(xml, function (err, result) {
    jsonResult = result.rss.channel[0];
    //console.dir(result.rss.channel);
  });


let today = new Date().toLocaleDateString('en-uk', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 


  res.render("index", { news: jsonResult.item, currentUser, today });
});



module.exports = router;
