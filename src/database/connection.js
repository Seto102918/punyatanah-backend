const Sequelize = require("sequelize");
const { database } = require("../config/seque-config");

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
  review: require("../models/review")(Sequelize, connect),
  tanah_image: require("../models/tanah_image")(Sequelize, connect),
  user: require("../models/user")(Sequelize, connect),
  tanah: require("../models/tanah")(connect, Sequelize),
};

module.exports = db;
