const ideasModel = require("../model");

async function getAllIdeas(req, res) {
  try {
    const allIdeas = await ideasModel.find();

    return res
      .status(200)
      .send({ code: 200, message: "idea saved", data: allIdeas });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = getAllIdeas;
