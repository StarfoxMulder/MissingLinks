'use strict';
module.exports = function(sequelize, DataTypes) {
  var itemW = sequelize.define('itemW', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: DataTypes.INTEGER,
    mainPic: DataTypes.LONGTEXT,
    pic2: DataTypes.LONGTEXT,
    pic3: DataTypes.LONGTEXT,
    pic4: DataTypes.LONGTEXT,
    itemName: DataTypes.STRING,
    posterName: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    shortDescription: DataTypes.TINYTEXT,
    found: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    datePosted: DataTypes.TIMESTAMP
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return itemW;
};
