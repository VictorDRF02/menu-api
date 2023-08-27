'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const foodOffer = [
      {
        FoodId: 2,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FoodId: 7,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FoodId: 9,
        OfferId: 1,
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
