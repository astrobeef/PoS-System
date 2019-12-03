//Route for /api/items

const router = require("express").Router();
const db = require("../../../models");

router.get("/", function (req, res) {
    db.items.findAll({}).then(function (dbItems) {
        res.json(dbItems);
    });
});

router.post("/", function (req, res) {

    db.items.create(req.body).then(function (dbItems) {
        res.json(dbItems)
    });

    console.log(req.body);
});


// DELETE route for deleting items
router.delete("/:id", function (req, res) {
    db.items.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbItems) {
        res.json(dbItems);
    });
});


//update current time and status

router.put("/:id", function (req, res) {
    console.log(req.body)

    db.items.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(function (dbItems) {
            res.json(dbItems);
        });
});






router.get("/:id", function (req, res) {

    db.items.findAll({
        where: {
            id: req.params.id
        }

    }).then(function (dbItems) {
        res.json(dbItems);
    });

})

module.exports = router;