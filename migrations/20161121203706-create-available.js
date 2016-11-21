'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Availables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      mainPic: {
        type: Sequelize.TEXT
      },
      pic2: {
        type: Sequelize.TEXT
      },
      pic3: {
        type: Sequelize.TEXT
      },
      pic4: {
        type: Sequelize.TEXT
      },
      itemName: {
        type: Sequelize.STRING
      },
      posterName: {
        type: Sequelize.STRING
      },
      posterContactNumber: {
        type: Sequelize.STRING
      },
      longDescription: {
        type: Sequelize.TEXT
      },
      shortDescription: {
        type: Sequelize.TEXT
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Availables');
  }
};
