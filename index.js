const express = require("express");
const path = require("path");

const app = express();
const staticPath = express.static(path.join(__dirname, "client/build"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(staticPath);
app.use("*", staticPath);
app.listen(3000);
