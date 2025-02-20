import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { FaRobot, FaPlay, FaBug, FaMoon, FaSun } from "react-icons/fa";
import { contextApi } from "../context/Context";

const EditorPage = () => {
  const { theme, toggleTheme } = useContext(contextApi);
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // AI Debugging Function
  const handleDebug = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/debug", {
        code,
      });
      setAiResponse(response.data.fixedCode);
    } catch (error) {
      setAiResponse("Error: AI Debugging Failed!");
    }
  };

  // Fixed Code Execution Function
  const handleRunCode = () => {
    try {
      const func = new Function(code);
      const result = func();
      setOutput(
        result !== undefined ? result.toString() : "Code executed successfully"
      );
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div
      className={`w-full min-h-[94vh] py-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } shadow-lg transition-all duration-300`}
    >
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Run only JavaScript here</h1>
          {/* Theme Toggle Button */}
        </div>

        {/* Monaco Editor */}
        <Editor
          height="600px"
          language="javascript"
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={code}
          onChange={setCode}
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleRunCode}
            className="bg-green-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700"
          >
            <FaPlay /> Run Code
          </button>
          <button
            onClick={handleDebug}
            className="bg-red-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-700"
          >
            <FaBug /> Fix Errors
          </button>
        </div>

        {/* Output Section */}
        {output && (
          <div
            className={`mt-4 p-3 rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-green-400"
                : "bg-gray-200 text-green-700"
            }`}
          >
            <h3 className="text-lg font-semibold">Output:</h3>
            <p>{output}</p>
          </div>
        )}

        {/* AI Response Section */}
        {aiResponse && (
          <div
            className={`mt-4 p-3 rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-blue-400"
                : "bg-gray-200 text-blue-700"
            }`}
          >
            <h3 className="text-lg font-semibold">AI Debugging Response:</h3>
            <pre className="whitespace-pre-wrap">{aiResponse}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorPage;
