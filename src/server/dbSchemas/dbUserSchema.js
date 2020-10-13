const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  flashCards: [{ type: mongoose.Schema.ObjectId, ref: "Cards" }],
});

module.exports = User = mongoose.model("User", usersSchema);
