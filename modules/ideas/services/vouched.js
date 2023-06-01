const ideasModel = require("../model");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

async function increaseVouches(req, res) {
    const _id =ObjectId(req.query.id);
    const userid = req.body.userID
  try {
    const idea =  await ideasModel.findById({_id: _id });

    if (!idea) {
        return res.status(404).json({ message: 'Idea not found' });
      }

      // if (idea.vouches.includes(userId)) {
      //   return res.status(400).json({ message: 'User has already liked this post' });
      // }
      //    vouches
      // idea.vouches += 1;

    if (idea.vouches.includes(userid)) {
      return res.status(400).json({ message: 'User has already vouched this post' });
    }

    idea.vouches.push(userid);
    await idea.save();

    return res
      .status(200)
      .send({ code: 200, message: "number of vouches increases" ,data:idea.vouches});
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the idea" });
  }
}

module.exports = increaseVouches;