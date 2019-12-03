//route for kitchen/station

const router = require("express").Router();

var db = require('../../../models/');

router.get("/:id", function (req, res) {
    db.items.findAll({
        where: {
            station: req.params.id
        }
    }).then(function (data) {
        const items = seperateItemsByProgress(data);
        const item = {
            ...items,
            layout: "kitchen"
        }
        console.log(item);
        res.render("station", item);
    })
});
function seperateItemsByProgress(items_db) {
    var items = {
        NotStarted: [],
        Working: [],
        Finished: []
    }

    items_db.forEach(item => {

        switch (item.status) {
            case ("not started"):
                items.NotStarted.push(item);
                break;
            case ("working"):
                items.Working.push(item);
                break;
            case ("finished"):
                items.Finished.push(item);
                break;
            default:
                break;
        }
    });

    return items;
}

module.exports = router;


