'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const offer = [
      {
        name: 'Oferta de agosto',
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ];

   await queryInterface.bulkInsert('Offers', offer )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Offers', null, {});
  }
};
