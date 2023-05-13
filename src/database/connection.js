const Sequelize = require("sequelize");
const { database } = require("../config/seque-config");
const review = require("../models/review");

const connect = new Sequelize(
  database.development.database,
  database.development.username,
  database.development.password,
  {
    host: database.development.host,
    dialect: "mysql",
  }
);

const db = {
  connect,
  Sequelize,
  review,
};

module.exports = db;
