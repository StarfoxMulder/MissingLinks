'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Wanteds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mainPic: {
        type: Sequelize.LONGBLOB
      },
      pic2: {
        type: Sequelize.LONGBLOB
      },
      pic3: {
        type: Sequelize.LONGBLOB
      },
      pic4: {
        type: Sequelize.LONGBLOB
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
    return queryInterface.dropTable('Wanteds');
  }
};