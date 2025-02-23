const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



const ai_CodeTranslator = async (code, fromLang, toLang) => {
  try {
    const prompt = `You are an expert code translator. Convert the given ${code} from ${fromLang} to ${toLang} while maintaining the original logic and structure. Ensure the translated code follows best practices and idiomatic syntax for ${toLang}. Preserve all comments and formatting. Return only the translated code without any additional text.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return error.message
  }

};

module.exports = ai_CodeTranslator;

