const connection = require('connection.js');

var orm = {
    selectAll: function(table) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    // not 100% on this one...
    insertOne: function(table, nameCol, booCol) {
        var queryString = 'INSERT INTO TABLE ?? (??, ??)';
        connection.query(queryString, [table, nameCol, booCol], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    // this is probably wrong!!
    updateOne: function(table, thisCol, thisVal, table, thisCol, thisVal) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ??.?? = ?';
        connection.query(queryString, [], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }

};

module.exports = orm