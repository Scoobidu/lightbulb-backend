const ideasModel = require("../model");

async function getByUserId(req, res) {
 
  try {
    const idea = await ideasModel.find({ userID: req.query.userID });
    return res
      .status(200)
      .send({ code: 200, message: "fetched by user", data: idea });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = getByUserId;
