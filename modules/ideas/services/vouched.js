const ideasModel = require("../model");
const mongoose = require("mongoose");

async function increaseVouches(req, res) {
  const ideaId = req.query.ideaId;
  const userID = req.body.userID;
  try {
    const idea = await ideasModel.findOne({ ideaID: ideaId });

    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    if (idea.vouches.includes(userID)) {
      // User has already vouched, remove the vouch
      idea.vouches = idea.vouches.filter(
        (vouchedUserID) => vouchedUserID !== userID
      );
    } else {
      // User hasn't vouched yet, add the vouch
      idea.vouches.push(userID);
    }

    await idea.save();

    return res.status(200).send({
      code: 200,
      message: "number of vouches increases",
      data: idea.vouches,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the idea" });
  }
}

module.exports = increaseVouches;

// if (idea.vouches.includes(userID)) {
//   return res
//     .status(400)
//     .json({ message: "User has already vouched this post" });
// }
