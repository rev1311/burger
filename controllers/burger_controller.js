const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(req, res) {
        res.json({ id: res.insertId });
    });
}); 

router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, {
        where: {
            id: condition
        }
    }, function(res) {
        if (res.changedRows === 0) {
        return res.status(404).end();
        } res.status(200).end();
    });
});

module.exports = router;