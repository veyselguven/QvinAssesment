const express = require("express");
const router = express.Router();
const { Job, Application } = require("../db/index");

router.post("/", async (req, res, next) => {
  try {
    const { body } = req;

    if (!("fullName" in body) || body["fullName"].length < 2) {
      return res.status(400).send({ message: "Invalid name" });
    }

    if (!("email" in body) || !body["email"].includes("@")) {
      return res.status(400).send({ message: "Invalid email" });
    }

    if (!("profile" in body) || !body["profile"].includes("http")) {
      return res.status(400).send({ message: "Invalid profile url" });
    }

    if (!("jobId" in body) || !body["jobId"]) {
      return res.status(400).send({ message: "Invalid job" });
    }

    const isJobExist = await Job.findByPk(body["jobId"]);
    if (!isJobExist) {
      return res.status(400).send({ message: "No job Id" });
    }

    const application = await Application.create(body);
    res.send(application);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
