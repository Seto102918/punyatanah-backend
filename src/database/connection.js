const Sequelize = require("sequelize");
const { config } = require("../config/config");

let connect = new Sequelize('test_hs', 'admin', 'admin', {
  host:'localhost',
  dialect: "mysql",
});

const db = {
  connect,
  Sequelize,
  review: require("../models/review")(Sequelize, connect),
  tanah_image: require("../models/tanah_image")(Sequelize, connect),
  user: require("../models/user")(Sequelize, connect),
  tanah: require("../models/tanah")(connect, Sequelize),
  province: require("../models/province")(Sequelize, connect),
  regency: require("../models/regency")(Sequelize, connect),
  tanah_tag: require("../models/tanah_tag")(Sequelize, connect),
};

module.exports = db;
