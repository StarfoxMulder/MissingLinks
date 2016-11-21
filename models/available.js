'use strict';
module.exports = function(sequelize, DataTypes) {
  var Available = sequelize.define('Available', {
    price: DataTypes.INT,
    mainPic: DataTypes.LONGBLOB,
    pic2: DataTypes.LONGBLOB,
    pic3: DataTypes.LONGBLOB,
    pic4: DataTypes.LONGBLOB,
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
  return Available;
};