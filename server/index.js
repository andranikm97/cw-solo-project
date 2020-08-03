const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const router = require("./router");

app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.get("*", (req, res) => {
  res.status(404);
  res.send("Sorry, page not found!");
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
