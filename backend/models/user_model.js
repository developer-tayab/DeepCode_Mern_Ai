const { Schema, model } = require("mongoose");

const User = new Schema({
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profilepic: { type: String, default: "https://cdn-icons-png.flaticon.com/512/149/149071.png" },
  membership: { type: String, default: "Free" },
}, { timestamps: true });

module.exports = model("User", User);