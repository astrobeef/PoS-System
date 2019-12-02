module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    status: DataTypes.STRING,         // "not started", "working", "finished"
    orderNumber: DataTypes.INTEGER,
    station: DataTypes.INTEGER,      // 1 : Salad, 2 : Dessert
    mods: DataTypes.STRING,
    highlight: DataTypes.STRING,
    averageTime: DataTypes.STRING,
    currentTime: DataTypes.STRING
  });

  items.create({

    name: "Caesar Salad",
    station: 1,
    mods: "no dressing, S.O.S., extra dressing, no croutons",
    highlight: "#55AB55",
    averageTime: "4:00"
  })

  return items;
};


