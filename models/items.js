module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    status:{  // "not started", "working", "finished"
      type : DataTypes.STRING,
      defaultValue : "not started"
    },
    orderNumber: DataTypes.INTEGER,
    station: DataTypes.INTEGER,      // 1 : Salad, 2 : Dessert
    mods: DataTypes.STRING,
    highlight: DataTypes.STRING,
    averageTime: DataTypes.STRING,
    currentTime:{
      type : DataTypes.STRING,
      defaultValue : "0:00"
    }
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


