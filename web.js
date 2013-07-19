var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var fileContents = fs.readFileSync("index.html", "utf-8");
  response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
