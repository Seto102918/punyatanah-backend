const tanah_tag = (Sequelize, sequelize) => {
  return sequelize.define("tanah_tag", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanah_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tag_code: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    tag_descr: {
      type: Sequelize.TEXT,
    },
  });
};

module.exports = tanah_tag;
