const orm = requires('../config/orm.js');

orm.selectAll('burger_name', 'devoured');

orm.insertOne('burger_name', 'devoured', 'false');

orm.updateOne('burgers', 'burger_name', newVal, 'burgers', 'burger_name', thisVal);

module.exports = burger.js