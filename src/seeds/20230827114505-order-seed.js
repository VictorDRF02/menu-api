'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const offer = [
      {
        name: 'Pedido 1',
        price: 200,
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ];

   await queryInterface.bulkInsert('Orders', offer )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
