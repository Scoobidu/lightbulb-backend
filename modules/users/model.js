const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  photoUrl: { type: String, required: false },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  twitter: { type: String },
});

module.exports = mongoose.model("users", userModel);
