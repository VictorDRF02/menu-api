module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('FoodOffer', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        FoodId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Food',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        OfferId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Offers',
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
      return queryInterface.dropTable('FoodOffer');
    }
  };
  