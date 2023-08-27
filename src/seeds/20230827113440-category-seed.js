'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const category = [ 
      {
        name: 'Platos fuertes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aperitivos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ensaladas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Postres',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ];
      await queryInterface.bulkInsert('Categories', category);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
