const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vouchesModel = new Schema(
  {
    userID: { type: String, required: true },
    ideaID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("vouche", vouchesModel);
