'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const foodOffer = [
      {
        foodId: 2,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodId: 7,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodId: 9,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('FoodOffer', foodOffer);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FoodOffer', null, {});
  }
};
