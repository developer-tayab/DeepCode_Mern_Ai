const ai_CodeTranslator = require("../utils/ai_CodeTranslator")
const aiCodeTranslator = async (req, res) => {
  try {
    const { code, fromLang, toLang } = req.body;
    if (!code || !fromLang || !toLang) return res.status(400).json({ message: "All fields are required" });
    const translatedCode = await ai_CodeTranslator(code, fromLang, toLang);
    return res.status(200).json({ message: "Code translated successfully", translatedCode });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = aiCodeTranslator;