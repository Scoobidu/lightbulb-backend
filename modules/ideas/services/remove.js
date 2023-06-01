const ideasModel = require("../model");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

async function remove(req, res) {
  try {
    const _id = ObjectId(req.query.id)
    const idea =  await ideasModel.findByIdAndDelete({_id: _id });
    // console.log(idea)
  //  console.log(idea)
  //  console.log(ideasModel)
    return res
      .status(200)
      .send({ code: 200, message: "idea deleted" ,data:idea});
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the ideas" });
  }
}

module.exports = remove;