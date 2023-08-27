'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const categoryOffer = [
      {
        categoryId: 1,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('categoryOffer', categoryOffer);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoryOffer', null, {}); 
  }
};
