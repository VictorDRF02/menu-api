'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Food, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE'
      });
      this.belongsToMany(models.Offer, { through: 'CategoryOffer' });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};