const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burger_name", function(res) {
        cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("burger_name", cols, vals, function(res) {
        cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burger_name", objColVals, condition, function(res) {
        cb(res);
        });
    }
};
      
module.exports = burger;