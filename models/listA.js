'use strict';
module.exports = function(sequelize, DataTypes) {
  var listA = sequelize.define('listA', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: DataTypes.INTEGER,
    mainPic: DataTypes.LONGTEXT,
    itemName: DataTypes.STRING,
    posterName: DataTypes.STRING,
    shortDescription: DataTypes.TINYTEXT,
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
  return listA;
};


    // pic2: DataType.LONGBLOB,
    // pic3: DataType.LONGBLOB,
    // pic4: DataType.LONGBLOB,
    // longDescription: DataType.TEXT,
