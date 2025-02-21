const jwt = require("jsonwebtoken");
const token = (_id, _email) => {
  try {
    return jwt.sign({ id: _id, email: _email }, process.env.JWT_SECRET, { expiresIn: "7d" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = token;

