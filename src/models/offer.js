'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      this.belongsToMany(models.Food, { through: 'FoodOffer' });
      this.belongsToMany(models.Category, { through: 'CategoryOffer' });
    }
  }
  Offer.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    price: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};