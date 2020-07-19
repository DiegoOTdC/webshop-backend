"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.belongsTo(models.user);
    }
  }
  address.init(
    {
      streetName: { type: DataTypes.STRING, allowNull: false },
      number: { type: DataTypes.STRING, allowNull: false },
      postalCode: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
