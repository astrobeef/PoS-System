//route for kitchen/station

const router = require("express").Router();

var db = require('../../../models/');


router.get("/:id", function (req, res) {


    db.items.findAll({
        where: {
            station: req.params.id
        }
    }).then(function (data) {

        const item = {
            items: data,
            layout : "kitchen"
        }
        res.render("station", item);
    }

    )
});


module.exports = router;