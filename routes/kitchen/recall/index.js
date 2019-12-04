
//route for /kitchen/expo

const router = require("express").Router();

//Accessing the Models folder
var db = require('../../../models/');
router.get("/", function (req, res) {
    db.items.findAll({

        where: {
            status: "finished"
        }
    }).then(function (data) {
        const item = {
            items: data,
            layout: "kitchen"

        }
        res.render("recallOrder", item);
        console.log(data)
    })

});
//logic about the mods

module.exports = router;