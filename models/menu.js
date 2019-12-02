module.exports = function (sequelize, DataTypes) {
  var menu = sequelize.define("menu", {
    name: DataTypes.STRING,
    station : DataTypes.INTEGER,      // 1 : Salad, 2 : Dessert
    mods : DataTypes.STRING,
    highlight : DataTypes.STRING,
    averageTime : DataTypes.STRING
  });

  menu.bulkCreate([
    {
    name : "Caesar Salad",
    station : 1,
    mods : "no dressing, S.O.S., extra dressing, no croutons",
    highlight : "#55AB55",
    averageTime : "4:00"
  },
  {
    name : "Vanilla Ice Cream",
    station : 1,
    mods : "Chocolate syrup, Caramel syrup, sprinkles",
    highlight : "#F3E5AB",
    averageTime : "2:00"
  }])
 
  return menu;
};
