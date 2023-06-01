const ideasModel = require("../model");

async function getByID(req, res) {
  try {
    const idea = await ideasModel.find({ ideaID: req.params.ideaID });
    
    return res
      .status(200)
      .send({ code: 200, message: "idea saved", data: idea });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = getByID;
