const discussionsModel = require("../model");

async function saveReply(req, res) {
  const comId = req.query.comId;
  try {
    console.log("as");
    const newReply = await discussionsModel.findOne({ comId: comId });
    if (newReply) {
      console.log(newReply.replies);
      newReply.replies.push(req.body);
      await newReply.save();
    }

    return res.status(200).send({
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
