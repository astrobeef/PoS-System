//Route for main

const router = require("express").Router();

router.use("/api", require("./api"));
router.use("/kitchen", require("./kitchen"));

router.get("/", function(req, res){
    res.send("Getting main route");
});

module.exports = router;