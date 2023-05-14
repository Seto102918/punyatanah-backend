const province = (Sequelize, sequelize) => {
  return sequelize.define(
    "province",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      province_name: {
        type: Sequelize.STRING(50),
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = province;
