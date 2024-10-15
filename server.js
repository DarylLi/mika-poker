const express = require("express");
const app = express();
const port = 8100;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
app.get("/*.js", (req, res) => {
  res.sendFile(__dirname + `/build/${req.url}`);
});
app.get("/*.gif", (req, res) => {
  res.sendFile(__dirname + `/build/${req.url}`);
});
app.get("/*.wasm", (req, res) => {
  res.sendFile(__dirname + `/build/${req.url}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
