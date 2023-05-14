const tanah = (sequelize, Sequelize) => {
  return sequelize.define(
    "tanah",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      size: {
        type: Sequelize.FLOAT(5),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING(24),
        allowNull: false,
      },
      certificate: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      id_regency: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      id_province: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = tanah;
