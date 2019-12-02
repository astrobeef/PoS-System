module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  });
  return items;
};
