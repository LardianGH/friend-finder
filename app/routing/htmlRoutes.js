var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        console.log("Survey")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });

      app.post("/survey", function(req, res) {
        console.log("Survey")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };