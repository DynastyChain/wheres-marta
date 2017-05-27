var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('START THIS SHIT UP HOMIE PORT ' + port + " LET'S GO. FLOCKA.");
});

var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: "hello" });
});

app.use("/", router);

module.exports = server;
