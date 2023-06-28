const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideasModel = new Schema(
  {
    userPhotoUrl: { type: String, required: false },
    userID: { type: String, required: true, unique: false },
    ideaID: { type: String, unique: true, required: true },
    images: { type: Array, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    vouches: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("idea", ideasModel);
