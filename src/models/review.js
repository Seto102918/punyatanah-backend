const { Sequelize, DataTypes } = require("sequelize");
const { database } = require("../config/seque-config");
const sequelize = new Sequelize("mysql");

const User = sequelize.define(
  "review",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
