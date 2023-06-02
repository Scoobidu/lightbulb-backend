require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(fileUpload());

const ideasRoute = require("./modules/ideas/router");
const vouchRoute = require("./modules/vouches/router");
const discussionsRoute = require("./modules/discussions/router");
const userRoute = require("./modules/users/router");
require("./config/database").connect();

app.use("/api/ideas", ideasRoute);
app.use("/api/vouches", vouchRoute);
app.use("/api/discussions", discussionsRoute);
app.use("/api/auth", userRoute);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
