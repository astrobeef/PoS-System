//Route for /api/items


const router = require("express").Router();

router.get("/", function (req, res) {
    res.send("Getting /api/items route");
});

module.exports = router;