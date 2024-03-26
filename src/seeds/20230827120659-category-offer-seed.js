'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const categoryOrder = [
      {
        CategoryId: 1,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 3,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 4,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: 5,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('CategoryOrder', categoryOrder);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CategoryOrder', null, {}); 
  }
};
