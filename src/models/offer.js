'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      this.hasMany(models.Category, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      }),
      this.hasMany(models.Food, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      })
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