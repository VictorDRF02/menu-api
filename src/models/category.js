'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Food, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
      this.belongsTo(models.Offer, {
        foreignKey: 'id'
      })
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