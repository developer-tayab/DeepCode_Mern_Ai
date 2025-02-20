const mongoose = require("mongoose");
require("dotenv").config()
const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${process.env.MONGODB_URI}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectionDB;