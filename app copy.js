const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};

const app = express();

const httpsServer = https.createServer(app);


/*https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);*/

httpsServer.listen(8000, "127.0.0.1", function () {
  console.log(`Listening on port ${8000}`);
});


  app.get("/test/:id", async (req, res) => {
    let id = req.params.id;
    let response = "Hi, your ID id " + id;
    res.send(response);
  });

https://localhost:8000/test/3

/*var app = require("express")();
var https = require("https");
var fs = require("fs");
var PORT = 443;

var options = {
  key: fs.readFileSync("XYZ.key"),
  cert: fs.readFileSync("ABC.crt"),
};

var server = https.createServer(options, app).listen(PORT, function () {
  console.log("Express listening on port " + PORT);
});



app.get("/test/:id", async (req, res) => {
    let id = req.params.id;
    let response = "Hi, your ID id " + id;;
  res.send(response);
});
*/