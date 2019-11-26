//route for /kitchen/expo

const router = require("express").Router();

router.get("/", function(req, res){
    res.send("Getting /kitchen/expo route");
});

module.exports = router;