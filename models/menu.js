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
    mods : "no dressing, S.O.S., extra dressing, no croutons, GLUTEN ALERGY",
    highlight : "#55AB55",
    averageTime : "4:00"
  },
  {
    name : "Vanilla Ice Cream",
    station : 2,
    mods : "Chocolate syrup, Caramel syrup, sprinkles, 'the works'",
    highlight : "#F3E5AB",
    averageTime : "2:00"
  },
  {
    name : "Kale Salad",
    station : 1,
    mods : "no cranberries, no walnuts, NUT ALERGY",
    highlight : "#F3E5AB",
    averageTime : "6:00"
  },
  {
    name : "Truffles",
    station : 2,
    mods : "no toppings, extra toppings, 'the works'",
    highlight : "#F3E5AB",
    averageTime : "5:00"
  }
])
 
  return menu;
};
