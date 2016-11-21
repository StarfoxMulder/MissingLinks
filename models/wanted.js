'use strict';
module.exports = function(sequelize, DataTypes) {
  var Wanted = sequelize.define('Wanted', {
    mainPic: DataTypes.TEXT,
    pic2: DataTypes.TEXT,
    pic3: DataTypes.TEXT,
    pic4: DataTypes.TEXT,
    itemName: DataTypes.STRING,
    posterName: DataTypes.STRING,
    posterContactNumber: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    shortDescription: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Wanted;
};
