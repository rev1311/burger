var express = require('express');

var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var apiRoutes = require("./controllers/burgers_controller.js");

app.use(apiRoutes);

app.listen(PORT, function() {
  console.log(`connected on port ${PORT}`);
});