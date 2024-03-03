'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [
      {
        name: "Admin",
        password: "$2b$10$gpKq4OVfwVt5FbAj.o36GeNiNlr3uY0wfIt1sdJTmqNmcpePv2qyO",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User",
        password: "$2b$10$2.kdUWbDMZ0FStvZy75/petrfA77Jmtq4Z9OFABZpvYk1ss3duR6O",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('Users', users);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {}); 
  }
};
