const Sequelize = require("sequelize");
const db = require("./database");

const Job = db.define("job", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Job;
