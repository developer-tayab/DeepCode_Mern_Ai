const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const ai_ResumeAnalyzer = async (resume_text, selected_skills) => {
  try {
    const prompt = `
    You are an AI specializing in resume evaluation and interview preparation. Your task is to analyze the provided resume and generate a structured response. The response should include:
    
    1. **Professional Summary** – Highlight key skills, experience, and achievements.
    2. **Resume Score (0-100)** – Evaluate based on structure, relevance, and clarity.
    3. **Technical Interview Questions** – Generate two role-specific questions for each selected skill.
    4. **Actionable Recommendations** – Provide suggestions to improve resume effectiveness.
    
    Ensure the response is provided in Markdown format.
    Resume Content: ${resume_text}
    Selected Skills: ${selected_skills.length > 0 ? selected_skills : "None"}
    `;


    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return error.message;
  }
};

module.exports = ai_ResumeAnalyzer;
