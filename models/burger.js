const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
        cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        console.log("--------")
        console.log(vals)
        orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
        });
    },
    updateOne: function(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
        cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};
      
module.exports = burger;