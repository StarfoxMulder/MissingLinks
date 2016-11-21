'use strict';
module.exports = function(sequelize, DataTypes) {
  var Available = sequelize.define('Available', {
    price: DataTypes.DECIMAL(10,2),
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
  return Available;
};
