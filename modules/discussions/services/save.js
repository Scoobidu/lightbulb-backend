const discussionsModel = require("../model");

async function saveComment(req, res) {
  try {
    const discussion = new discussionsModel(req.body);
    const newDiscussion = await discussion.save();
    console.log(newDiscussion);

    return res.status(200).send({ code: 200, message: "discussion added" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error adding the discussion" });
  }
}

module.exports = saveComment;
