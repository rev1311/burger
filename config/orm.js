const connection = require('../config/connection.js');

function qMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
  
      if (Object.hasOwnProperty.call(ob, key)) {
  
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    } return arr.toString();
};

var orm = {
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += qMarks(vals.length);
        queryString += ") ";
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result); 
        }); 
    }, 

    updateOne: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVal);
        queryString += " WHERE ";
        queryString += "id=" + condition;
        
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    deleteOne: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += "id=" + condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) { 
              throw err
          }
          cb(result);
      });
    }
};


module.exports = orm; 