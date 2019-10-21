var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3067;

app.use(express.static("./app/public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
