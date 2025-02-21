const aiFixedCode = require("../utils/ai_BugFixer")
const aiBugFixer = async (req, res) => {
  try {
    const { code } = req.body;
    console.log("route is running!")
    if (!code) return res.status(400).json({ message: "Code is required" });
    const response = await aiFixedCode(code)
    return res.status(200).json({ message: "Code fixed successfully", response })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

module.exports = aiBugFixer;