const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  //   res.send("Hellow world");
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/contact", (req, res) => {
  res.send("I am contact");
});

app.get("/blog", (req, res) => {
  res.send("I am blog page");
});

app.listen(8000, () => {
  console.log("App listening on http://localhost:8000");
});
