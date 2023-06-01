const discussionsModel = require("../model");

async function getByID(req, res) {
  try {
    const { ideaID } = req.query;

    const discussions = await discussionsModel.find({ ideaID: ideaID });

    return res
      .status(200)
      .send({ code: 200, message: "idea saved", data: discussions });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = getByID;
