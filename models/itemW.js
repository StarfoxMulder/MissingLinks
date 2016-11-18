'use strict';
module.exports = function(sequelize, DataTypes) {
  var itemW = sequelize.define('itemW', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: DataTypes.INTEGER,
    mainPic: DataType.LONGBLOB,
    pic2: DataType.LONGBLOB,
    pic3: DataType.LONGBLOB,
    pic4: DataType.LONGBLOB,
    itemName: DataTypes.STRING,
    posterName: DataTypes.STRING,
    longDescription: DataType.TEXT,
    shortDescription: DataType.TINYTEXT,
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
