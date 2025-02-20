import React, { useState, useContext } from "react";
import axios from "axios";
import { contextApi } from "../context/Context";

const ResumeAnalysis = () => {
  const { theme } = useContext(contextApi); // Theme Context
  const [resume, setResume] = useState(null);
  const [resumeScore, setResumeScore] = useState(null);
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample skill options
  const skillOptions = [
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "SQL",
  ];

  // Handle Resume Upload
  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  // Toggle Skill Selection
  const toggleSkill = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  // Generate Resume Analysis & Questions
  const analyzeResume = async () => {
    setLoading(true);
    const formData = new FormData();
    if (resume) formData.append("resume", resume);
    formData.append("skills", JSON.stringify(skills));

    try {
      const response = await axios.post(
        "http://localhost:5000/analyze-resume",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResumeScore(response.data.score);
      setSummary(response.data.summary);
      setQuestions(response.data.questions);
    } catch (error) {
      setSummary("Error: Could not analyze the resume.");
    }

    setLoading(false);
  };

  // Theme Support
  const isDarkMode = theme === "dark";
  const bgClass = isDarkMode ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`min-h-[94vh] p-6 ${bgClass}`}>
      <h1 className="text-2xl font-bold mb-4">
        AI Resume Analysis & Interview Prep
      </h1>

      {/* Resume Upload */}
      <div className="mb-4">
        <label className="block mb-2">Upload Your Resume</label>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleResumeUpload}
          className="p-2 border rounded-md"
        />
      </div>

      {/* Skill Selection */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Select Your Skills:</h3>
        <div className="flex flex-wrap gap-2">
          {skillOptions.map((skill) => (
            <button
              key={skill}
              className={`px-3 py-1 rounded-md ${
                skills.includes(skill)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-600 text-white"
              }`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Analyze Resume Button */}
      <button
        onClick={analyzeResume}
        className={`px-4 py-2 rounded-md ${
          isDarkMode
            ? "bg-green-600 hover:bg-green-700"
            : "bg-green-400 hover:bg-green-500"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {/* Display Resume Score */}
      {resumeScore !== null && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <h3 className="text-lg font-semibold">Resume Score:</h3>
          <p className="text-yellow-400 text-xl font-bold">
            {resumeScore} / 100
          </p>
        </div>
      )}

      {/* Display Resume Summary */}
      {summary && (
        <div
          className={`mt-4 p-4  ${
            theme === "light" ? "text-gray-300 bg-gray-700 " : "bg-gray-700 text-white"
          }  rounded-md`}
        >
          <h3 className="text-lg font-semibold">
            AI-Generated Resume Summary:
          </h3>
          <p>{summary}</p>
        </div>
      )}

      {/* Display Questions */}
      {questions.length > 0 && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <h3 className="text-lg font-semibold">
            Generated Interview Questions:
          </h3>
          <ul className="list-disc pl-5">
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalysis;
