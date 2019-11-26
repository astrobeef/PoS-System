//route for kitchen/station

const router = require("express").Router();

router.get("/:id", function(req, res){
    res.send(`Getting /kitchen/station/${req.params.id} route`);
});

module.exports = router;