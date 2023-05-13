const tanah_image = (Sequelize, sequelize) => {
  return sequelize.define(
    "tanah_img",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      path: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      id_tanah: {
        type: Sequelize.STRING(12),
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = tanah_image;
