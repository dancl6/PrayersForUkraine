const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Prayers extends Model {}

// create data types for Prayers model
Prayers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prayer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "prayers",
  }
);

module.exports = Prayers;
