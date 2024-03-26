'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const foodOrder = [
      {
        FoodId: 2,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FoodId: 7,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FoodId: 9,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('FoodOrder', foodOrder);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FoodOrder', null, {});
  }
};
