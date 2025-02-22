const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



const aiFixedCode = async (code) => {
  try {
    const prompt = `You are an AI code debugger. Your task is to fix the given code while maintaining its original structure and improving its best practices.

Here is the code:
\`\`\`javascript
${code}
\`\`\`

Your response should meet the following requirements:
1. Return only the fixed code **inside a Markdown code block** (\`\`\`javascript ... \`\`\`).
2. Add meaningful comments explaining each fix, but **avoid unnecessary explanations** outside the code.
3. Do not include extra text like "@return," "output," or unnecessary descriptions.
4. Ensure that all identified bugs are **completely fixed**.
5. Keep the code readable and **well-formatted**.

Now, fix the code and return only the corrected version inside:
\`\`\`javascript
(Fixed code should be here)
\`\`\`
`;
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    return error.message
  }

};

module.exports = aiFixedCode;

