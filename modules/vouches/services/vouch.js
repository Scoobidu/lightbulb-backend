const vouchesModel = require("../model");

async function vouchIdea(req, res) {
  try {

    const vouch = new vouchesModel(req.body);
    const newVouch = await vouch.save();
    // console.log(newVouch);

    return res.status(200).send({ code: 200, message: "idea vouched" ,data:vouch});
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error vouching the idea" });
  }
}

module.exports = vouchIdea;
