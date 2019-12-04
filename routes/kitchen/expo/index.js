//route for /kitchen/expo

const router = require("express").Router();

//Accessing the Models folder
var db = require('../../../models/');

//Get route
router.get("/", function (req, res) {
    db.items.findAll({
    }).then(function (data) {

        const item = {
            items: filterByTable(data),
            layout: "kitchen"
        }
        console.log(item.items);
        res.render("expo", item);
    })

});

function filterByTable(data)
{

    const itemsByOrder = {};

    data.forEach(item => {

        if(itemsByOrder["order" + item.dataValues.orderNumber] == undefined)
        {
            itemsByOrder["order" + item.dataValues.orderNumber] = [];
            itemsByOrder["order" + item.dataValues.orderNumber].push(item.dataValues);
        }
        else
        {
            itemsByOrder["order" + item.dataValues.orderNumber].push(item.dataValues);
        }

    });

    const itemsByOrder_Array = [];

    for (const key in itemsByOrder) {

        console.log(key);
        itemsByOrder_Array.push(itemsByOrder[key]);
    }

    console.log(itemsByOrder_Array);

    return itemsByOrder_Array;

};


//logic about the mods

module.exports = router;
