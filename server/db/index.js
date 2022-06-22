const db = require("./database");
const Team = require("./team");

const Job = require("./job");
const Application = require("./application");

// ?
Job.hasMany(Application);
Application.belongsTo(Job);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Job,
  Team,
  Application,
};
