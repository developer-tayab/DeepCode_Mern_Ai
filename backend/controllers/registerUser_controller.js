const bcrypt = require("bcrypt");
const User = require("../models/user_model");
const token = require("../utils/token");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ fullname, email, password: hashedPassword });

    // Generate JWT token
    const jwtToken = token(user._id, user.email);

    // Set HTTP-only cookie
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({
      message: "User created successfully!",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        membership: user.membership,
        date: new Date(user.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        }), // Displays "March 2023"
      },
      token: jwtToken,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = registerUser;
