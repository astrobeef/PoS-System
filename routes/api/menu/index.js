//Routes for /api/menu

const router = require("express").Router();

router.get("/", function(req, res){
    res.send("Getting /api/menu route");
});

module.exports = router;