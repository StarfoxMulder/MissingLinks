'use strict';
module.exports = function(sequelize, DataTypes) {
  var wanted = sequelize.define('wanted', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: DataTypes.INTEGER,
    mainPic: DataTypes.LONGBLOB,
    pic2: DataTypes.LONGBLOB,
    pic3: DataTypes.LONGBLOB,
    pic4: DataTypes.LONGBLOB,
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
  return wanted;
};
