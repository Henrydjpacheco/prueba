const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Theme",
    {
      id_theme: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id_theme",
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
