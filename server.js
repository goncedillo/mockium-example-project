const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  return res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(3000, function() {
  console.log("Mockium example project running @ 3000");
});
