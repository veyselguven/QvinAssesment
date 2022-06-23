const express = require("express");
const router = express.Router();
const { Job } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const allJob = await Job.findAll();
    //console.log(allTeam);
    res.send(allJob);
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
