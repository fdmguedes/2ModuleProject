const express = require("express");
const router = express.Router();
var parseString = require("xml2js").parseString;
const axios = require("axios");

/* GET home page */
router.get("/", async (req, res, next) => {
  const response = await axios.get("http://feeds.jn.pt/JN-Ultimas");
  const xml = response.data;
  let jsonResult;

  parseString(xml, function (err, result) {
    jsonResult = result.rss.channel[0];
    //console.dir(result.rss.channel);
  });

  console.log(jsonResult.item[0].enclosure);
  res.render("index", { news: jsonResult.item });
});



module.exports = router;
