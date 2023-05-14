const user = (Sequelize, sequelize) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      full_name: {
        type: Sequelize.STRING(50),
      },
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(100),
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = user;
