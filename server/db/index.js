const db = require("./database");
const Team = require("./team");
const Candidate = require("./candidate");
const Job = require("./job");
// ?
Candidate.hasMany(Job);
Job.belongsTo(Candidate);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Candidate,
  Job,
  Team,
};
