const express = require("express");
const router = express.Router();
const { Team } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const allTeam = await Team.findAll();
    res.send(allTeam);
  } catch (err) {
    console.log("err is :", err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
