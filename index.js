require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;
//[port route logical endpoint]
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hello world of twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>HELLO</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
