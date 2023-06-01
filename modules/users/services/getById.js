const userModel = require("../model");

async function getById(req, res) {
  try {
    console.log(req.query.userId)
    const user = await userModel.find({ userId: req.query.userId });
    
    return res
      .status(200)
      .send({ code: 200, message: "user find", data: user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the user" });
  }
}

module.exports = getById;
