module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('CategoryOffer', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        categoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Category',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        offerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Offer',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('CategoryOffer');
    }
  };
  