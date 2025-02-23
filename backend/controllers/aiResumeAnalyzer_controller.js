const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");
const ai_ResumeAnalyzer = require("../utils/ai_ResumeAnalyzer")
const aiResumeAnalyzer = async (req, res) => {
  try {
    const filepath = req.file.path;
    const filetype = req.file.mimetype;
    const skills = req.body.skills;

    if (!req.file) return res.status(400).json({ message: "Resume file is required" });
    if (filetype === "application/pdf") {
      const buffer = fs.readFileSync(filepath);
      const data = await pdfParse(buffer);
      const text = data.text;
      const resumeAnalyzer = await ai_ResumeAnalyzer(text, skills);
      fs.unlinkSync(filepath)
      res.status(200).json({ message: "Successfully Completed analysis !", resumeAnalyzer })
      // return res.status(200).json({ message: "Resume analyzed successfully", resumeAnalyzer });
    } else if (filetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const docxBuffer = fs.readFileSync(filepath);
      const result = await mammoth.extractRawText({ buffer: docxBuffer });
      const text = result.value
      const resumeAnalyzer = await ai_ResumeAnalyzer(text, skills);
      res.status(200).json({ message: "Successfully Completed analysis !", resumeAnalyzer })
      fs.unlinkSync(filepath)
    } else {
      return res.status(400).json({ message: "Internal Error!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Internal Error!", Error: error.message });
  }
};

module.exports = aiResumeAnalyzer;
