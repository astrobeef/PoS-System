module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    orderNumber: DataTypes.INTEGER,
    mods: DataTypes.STRING,
    highlight: DataTypes.STRING,
    averageTime: DataTypes.STRING,
    currentTime: DataTypes.STRING

  });
  return items;
};
