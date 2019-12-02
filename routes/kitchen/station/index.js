//route for kitchen/station

const router = require("express").Router();

router.get("/:id", function(req, res){


    db.items.findAll({

        where:{
            station: req.params.id

        }
    }).then(function (data) {

        const item = {
            items: data
        }
        res.render("./partials/station", item);
});

module.exports = router;