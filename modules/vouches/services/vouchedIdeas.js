const vouchesModel = require("../model");
const ideasModel = require("../../ideas/model");

async function vouchedIdeas(req, res) {
  try {
    let vouches = await vouchesModel.find({ userID: req.query.userID });
    // console.log(vouches)
    const allVouches = [];
    if (vouches.length)
      for (var index in vouches) {
        var idea = await ideasModel.findOne({ ideaID: vouches[index].ideaID });
        allVouches.push(idea);
      }

      // console.log(allVouches)
    return res
      .status(200)
      .send({ code: 200, message: "vouched ideas", data: allVouches });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the vouched ideas" });
  }
}

module.exports = vouchedIdeas;
