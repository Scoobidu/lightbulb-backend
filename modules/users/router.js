const express = require("express");
const router = express.Router();

const saveUser = require("./services/register");
const getUserById = require("./services/getById");
const getAllUser = require("./services/getAll");
const loginUser = require("./services/login");
const updatename = require("./services/updatename");
const updatedbio = require("./services/updateBio");
const updatedTwitter = require("./services/updatedTwitter");

router.post("/register", async (req, res) => {
  await saveUser(req, res);
});

router.get("/", async (req, res) => {
  await getUserById(req, res);
});

router.get("/get-all", async (req, res) => {
  await getAllUser(req, res);
});

router.post("/login", async (req, res) => {
  await loginUser(req, res);
});

router.put("/updatename", async (req, res) => {
  await updatename(req, res);
});

router.put("/update", async (req, res) => {
  await updatedbio(req, res);
});

router.put("/updateTwitter", async (req, res) => {
  await updatedTwitter(req, res);
});

module.exports = router;
