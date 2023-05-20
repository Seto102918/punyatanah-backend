const regency = (Sequelize, sequelize) => {
  return sequelize.define(
    "regency",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      regency_name: {
        type: Sequelize.STRING(50),
      },
      // province_name: {
      //   type: Sequelize.STRING(50),
      // },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = regency;
