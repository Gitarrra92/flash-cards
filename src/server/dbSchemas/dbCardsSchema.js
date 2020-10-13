const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  translation: { type: String, required: false },
  searchedWord: { type: String, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Cards", cardSchema);
