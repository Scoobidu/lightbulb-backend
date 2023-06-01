const express = require("express");
const router = express.Router();

const saveComment = require("./services/save");
const saveReply = require("./services/saveReply");
const getByID = require("./services/getById");

// save comment
router.post("/save", async (req, res) => {
  await saveComment(req, res);
});

// save reply
router.put("/save-reply", async (req, res) => {
  await saveReply(req, res);
});

// get commented ideas
router.get("/get-by-id", async (req, res) => {
  await getByID(req, res);
});

module.exports = router;
