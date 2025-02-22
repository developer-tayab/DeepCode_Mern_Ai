const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const token = require("../utils/token");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const jwtToken = token(user._id, user.email);

    // Set HTTP-only cookie
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "User logged in successfully!",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilepic: user.profilepic,
        membership: user.membership,
        date: new Date(user.createdAt).toLocaleDateString(),
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loginUser;