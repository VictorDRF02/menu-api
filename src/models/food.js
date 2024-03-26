'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      });
      this.belongsToMany(models.Order, { through: 'FoodOrder' });
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    amount: DataTypes.STRING,
    price: DataTypes.FLOAT, 
    picture: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};