const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");


const httpPort = 8000;
//const httpsPort = 7421;

const app = express();

/*var options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};*/

const httpServer = http.createServer(app);
//const httpsServer = https.createServer(options,app);

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/test", async (req, res) => {

  res.send("Hi");
});

httpServer.listen(httpPort, "127.0.0.1", function () {
  console.log(`Listening on port ${httpPort}`);
});

/*httpsServer.listen(httpsPort, "127.0.0.1", function () {
  console.log(`Listening on port ${httpsPort}`);
});*/



