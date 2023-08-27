'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const categoryOffer = [
      {
        CategoryId: 1,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 3,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 4,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 5,
        OfferId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('CategoryOffer', categoryOffer);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CategoryOffer', null, {}); 
  }
};
