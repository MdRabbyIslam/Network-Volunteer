const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require(bodyParser);
const cors = require(cors);

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
