//Route for main

const router = require("express").Router();

//Accessing the Models folder
var db = require('../models');

router.use("/api", require("./api"));
router.use("/kitchen", require("./kitchen"));

//Get route
router.get("/", function (req, res) {
    db.items.findAll({
    }).then(function (data) {

        const item = {
            items: data,
            layout : "server"
        }
        res.render("main", item);
    })

});

module.exports = router;