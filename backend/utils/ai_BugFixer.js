const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



const aiFixedCode = async (code) => {
  try {
    const prompt = `Explain how ${code} works and Fixes this code with good practice. and make ensure the bugs is fixed completed if bugs is not fixed then you tod me how can i fixes this code but remember you just in response me in fixes code only with comments and  one tings more do not provided me more extra thing like @retun ect i think it is waste of things in response just provided please fix code only code .`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    return error.message
  }

};

module.exports = aiFixedCode;

