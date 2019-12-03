//Route for main

const router = require("express").Router();

//Accessing the Models folder
var db = require('../models');

router.use("/api", require("./api"));
router.use("/kitchen", require("./kitchen"));

//Get route
router.get("/", function (req, res) {
    db.menu.findAll({
    }).then(function (data) {

        const menu = {
            menu: data,
            layout : "server"
        }
        console.log("------MAIN : Rendering main page ... ------>>>");
        console.log(`------>>> Passing in ${menu} ------>>>`);
        res.render("main", menu);
    });

});

module.exports = router;