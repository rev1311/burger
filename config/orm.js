const connection = require('../config/connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    // not 100% on this one...
    insertOne: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${vals})`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },
    // this is probably wrong!!
    updateOne: function(table, objColVal, condition, cb) {
        var sqld = objToSql(objColVal);
        var queryString = `UPDATE ${table} SET ${sqld} WHERE ?`;
        connection.query(queryString, condition, function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    }
};

module.exports = orm