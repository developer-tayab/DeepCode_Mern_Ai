import React, { useState, useContext } from "react";
import axios from "axios";
import { contextApi } from "../context/Context";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const skillOptions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Python",
  "Django",
  "Flask",
  "Machine Learning",
  "Deep Learning",
  "Data Structures & Algorithms",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "REST API",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Azure",
  "Git",
  "Linux",
  "System Design",
  "CI/CD",
  "Microservices",
  "Cybersecurity",
  "Networking",
  "Data Engineering",
  "Big Data",
];

const ResumeAnalysis = () => {
  const { theme } = useContext(contextApi);
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isDarkMode = theme === "dark";
  const bgClass = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
      setResumeName(file.name);
    }
  };

  const toggleSkill = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const analyzeResume = async () => {
    if (!resume) {
      setErrorMessage("Please upload a resume before analyzing.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("skills", JSON.stringify(skills));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/services/ai-resume-analyzer-preparation",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setSummary(response.data.resumeAnalyzer);
    } catch (error) {
      setSummary("");
      setErrorMessage("Error: Could not analyze the resume. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className={`min-h-screen p-8 ${bgClass}`}>
      <h1 className="text-4xl font-bold mb-8 text-center">
        AI Resume Analysis & Interview Prep
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block text-lg font-semibold mb-3">
          Upload Your Resume
        </label>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleResumeUpload}
          className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
        />
        {resumeName && (
          <p className="text-sm mt-2 text-gray-400">Selected: {resumeName}</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Select Your Skills:</h3>
        <div className="grid grid-cols-3 gap-3">
          {skillOptions.map((skill) => (
            <button
              key={skill}
              disabled={loading}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-all ${
                skills.includes(skill)
                  ? "bg-blue-500"
                  : "bg-gray-700 hover:bg-gray-600"
              } ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={analyzeResume}
          disabled={loading}
          className="px-8 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-all"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>

      {summary && (
        <div className="max-w-3xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Analysis Summary</h2>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    wrapLongLines={true}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {summary}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalysis;
