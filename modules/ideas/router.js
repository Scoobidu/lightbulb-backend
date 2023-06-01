const express = require("express");
const router = express.Router();

const saveIdea = require("./services/save");
const getAllIdeas = require("./services/getAll");
const getByID = require('./services/getById')
const getByUserID = require('./services/getByUserId')
const removeIdea = require('./services/remove')
const ideaVouches = require('./services/vouched')

// save ideas
router.post("/save", async (req, res) => {
  await saveIdea(req, res);
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

router.put('/vouch',async (req,res)=>{
  await ideaVouches(req,res)
})


module.exports = router;
