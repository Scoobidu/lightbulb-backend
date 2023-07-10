const ideasModel = require("../model");

async function getByTags(req, res) {
  console.log(req.query.tag);
  try {
    const idea = await ideasModel.find({ category: req.query.tag });
    return res
      .status(200)
      .send({ code: 200, message: "fetched by tag", data: idea });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = getByTags;
