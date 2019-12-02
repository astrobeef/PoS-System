//Routes for /api/menu

const router = require("express").Router();
const db = require("../../../models");


router.get("/", function(req, res){
    db.menu.findAll({}).then(function(dbMenu){
        res.json(dbMenu);
    })
});

router.get("/:id", function(req, res){

    db.menu.findAll({
        where : {
            id : req.params.id
        }
    }).then(function(dbMenuItem){
        res.json(dbMenuItem);
    });
});

module.exports = router;