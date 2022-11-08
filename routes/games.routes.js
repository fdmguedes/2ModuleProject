const express = require("express");
const router = express.Router();

//.get to display the games (straight return because we are only rendering === no promises)
router.get("/games", (req, res, next) => res.render("categories/games"));

module.exports = router;
