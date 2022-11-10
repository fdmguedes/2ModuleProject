const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

//.get to display the games (straight return because we are only rendering === no promises)
router.get("/games", async (req, res, next) => {
  const currentUser = req.session.currentUser;
  res.render("categories/games", { currentUser });
});

module.exports = router;
