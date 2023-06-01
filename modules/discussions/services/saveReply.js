const discussionsModel = require("../model");

async function saveReply(req, res) {
  try {
    const newReply = await discussionsModel.findOneAndUpdate(
      {
        comId: req.body.comId,
        userID: req.body.userID,
        ideaID: req.body.ideaID,
      },
      req.body
    );
    console.log(newReply);

    return res
      .status(200)
      .send({
        code: 200,
        message: "replied to the discussion",
        data: newReply,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error replying to the discussion" });
  }
}

module.exports = saveReply;
