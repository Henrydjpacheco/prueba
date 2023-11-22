const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SubCategory",
    {
      id_SubCategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id_SubCategory",
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
