//route for /kitchen/expo

const router = require("express").Router();

//Accessing the Models folder
var db = require('../../../models/');

//Get route
router.get("/", function (req, res) {
    db.items.findAll({
    }).then(function (data) {
        const item = {
            items: data
        }
        res.render("expo", item);
    })

});

//logic about the mods

module.exports = router;
