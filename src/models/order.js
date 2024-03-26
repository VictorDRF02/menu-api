'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsToMany(models.Food, { through: 'FoodOrder' });
      this.belongsToMany(models.Category, { through: 'CategoryOrder' });
    }
  }
  Order.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    price: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};