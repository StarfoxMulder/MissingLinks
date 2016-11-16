'use strict';
module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: DataTypes.INTEGER,
    mainPic: DataType.LONGTEXT, 
    pic2: DataType.LONGTEXT, 
    pic3: DataType.LONGTEXT, 
    pic4: DataType.LONGTEXT, 
    itemName: DataTypes.STRING,
    posterName: DataTypes.STRING,
    longDescription: DataType.TEXT,
    shortDescription: DataType.TINYTEXT,
    sold: {
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
  return item;
};