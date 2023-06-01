const express = require("express");
const router = express.Router();

const vouchIdea = require("./services/vouch");
const vouchedIdeas = require("./services/vouchedIdeas");

// save vouches
router.post("/vouch", async (req, res) => {
  await vouchIdea(req, res);
});

// get vouched ideas
router.get("/vouched-ideas", async (req, res) => {
  await vouchedIdeas(req, res);
});

module.exports = router;
