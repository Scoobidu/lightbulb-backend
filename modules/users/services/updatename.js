const userModel = require("../model");
const mongoose = require("mongoose");

async function updatename(req, res) {
  const userId = req.query.userId;
  const updatedUsername = req.body.name;
  try {
    const user = await userModel.findOne({ userId: userId });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    user.name = updatedUsername;
    await user.save();

    return res
      .status(200)
      .send({ code: 200, message: "updated name", data: user.name });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the user" });
  }
}

module.exports = updatename;
