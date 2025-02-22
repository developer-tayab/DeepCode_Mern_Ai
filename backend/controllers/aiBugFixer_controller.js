const aiFixedCode = require("../utils/ai_BugFixer");

const aiBugFixer = async (req, res) => {
  try {
    console.log("Bug Fixer API route is running!");

    // Extract and validate code input
    let { code } = req.body;
    if (!code || typeof code !== "string") {
      return res.status(400).json({ message: "Valid code input is required" });
    }

    code = code.trim(); // Remove extra spaces or new lines

    // Process the code through AI Fixer
    const fixedCode = await aiFixedCode(code);

    if (!fixedCode) {
      return res.status(500).json({ message: "AI could not generate a response" });
    }

    // console.log(fixedCode);

    return res.status(200).json({
      message: "Code fixed successfully",
      fixedCode,
    });
  } catch (error) {
    console.error("Error in aiBugFixer:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = aiBugFixer;
