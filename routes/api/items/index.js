//Route for /api/items


const router = require("express").Router();
const db = require("../../../models");

router.get("/", function (req, res) {
    db.items.findAll({}).then(function (dbItems) {
        res.json(dbItems);
    });
});

router.post("/", function (req, res) {

    db.items.create(req.body).then(function(dbItems){
        res.json(dbItems)
    })

    console.log(req.body);

    res.sendStatus(200);


})

router.get("/:id", function (req, res) {

})

module.exports = router;