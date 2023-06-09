const express = require("express");
const router = express.Router();

const saveIdea = require("./services/save");
const getAllIdeas = require("./services/getAll");
const getByID = require("./services/getById");
const getByTags = require("./services/getByTags");
const getByUserID = require("./services/getByUserId");
const vouchersList = require("./services/VouchersList");
const removeIdea = require("./services/remove");
const ideaVouches = require("./services/vouched");

// get vouchers
router.get("/vouchersList", async (req, res) => {
  await vouchersList(req, res);
});

// save ideas
router.post("/save", async (req, res) => {
  await saveIdea(req, res);
});

router.get("/getByTags", async (req, res) => {
  await getByTags(req, res);
});

// get all ideas
router.get("/get-all", async (req, res) => {
  await getAllIdeas(req, res);
});

router.get("/user", async (req, res) => {
  await getByUserID(req, res);
});

router.get("/:ideaID", async (req, res) => {
  await getByID(req, res);
});

router.delete("/remove", async (req, res) => {
  await removeIdea(req, res);
});

router.put("/vouch", async (req, res) => {
  await ideaVouches(req, res);
});

module.exports = router;
