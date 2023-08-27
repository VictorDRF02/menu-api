'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const food = [
      {
        name: 'Filete de res',
        amount: '200 g',
        price: 126,
        picture: 'https://buenprovecho.hn/wp-content/uploads/2020/01/Filete-de-res-a-la-pimienta.jpg',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pollo a la parrilla',
        amount: '160 g',
        price: 100,
        picture: 'https://gastronomiaycia.republica.com/wp-content/photos/pollo_parrilla1.jpg',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salmon al horno',
        amount: '210 g',
        price: 130,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGexwIUNHFLQCxeToGMjDBuG-NH83AT6puUmE9LejF6FJwhodYwrzTt34n5AjrmPrTRk&usqp=CAU',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patatas fritas',
        amount: '90 g',
        price: 20,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusu1M38-_pL7CpBDuxHJdV9wIaB--7A4eCpGmHpAG4vFuZnfoxxPKgFxpejp8VWWx42w&usqp=CAU',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tostadas',
        amount: '45 g',
        price: 10,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXfB0db7Ais4zvKi61QR3Cp-dtoqRqgqsbcczNOkNSm2PfqvVcMtU4OuWCFY2DL9VHDo&usqp=CAU',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brochetas',
        amount: '60 g',
        price: 15,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UzxYcdhEKQYKnRU76u88SoqLOXUEiIjarIjDs7j1ObOjQmlFuEks82WAR8KMlytXRV8&usqp=CAU',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomates',
        amount: '90 g',
        price: 20,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5xOj4HFxKbnWyKpq6PesSdEDcn4L0N3q1Rr0E4KLiD89bL5mlw0UHlD_nnSAbjPRmfA&usqp=CAU',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zanahorias',
        amount: '90 g',
        price: 20,
        picture: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/ensalada-refrescante-de-zanahoria-frutas-y-semillas/900/ensalada-refrescante-de-zanahoria-frutas-y-semillas.jpg',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jugo de naranja',
        amount: '100 ml',
        price: 5,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Alnh_RyhptZekUxyyKbhg5TSRKleZ0XGSJcIdR-wh5i82VS1_-QGGenoZvGIhiLbUGg&usqp=CAU',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Limonada',
        amount: '100 ml',
        price: 5,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlJHGow3WvYRU32Vcl243Wwo1LMSEn8yROOFukc9o9VyCdwpxUok-Gr-2ozjFsB_0CE0&usqp=CAU',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flan de leche',
        amount: '30 g',
        price: 10,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9fnrioIvU0CI2WgXBTPjLOOWJKWse7QID7Q_n3eOilRG9wZja5Ct6-pz2gQtlM36cm4&usqp=CAU',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helado',
        amount: '20 ml',
        price: 10,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBEIj3SeNvcsHMePuyEZkvAvcOJXf8TTXbsSwAv6Jhf5Fl9C661iYevAKKHldapOPetU&usqp=CAU',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ];
    await queryInterface.bulkInsert('Food', food);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Food', null, {});
  }
};
