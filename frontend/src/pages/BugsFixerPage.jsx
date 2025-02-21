import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { contextApi } from "../context/Context";

const BugsFixerPage = () => {
  const { theme } = useContext(contextApi); // Get theme from context
  const [code, setCode] = useState("// Paste your code here...");
  const [debuggedCode, setDebuggedCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to send code for debugging
  const handleDebug = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/services/ai-bugs-fixer",
        {
          code,
        }
      );
      setDebuggedCode(response.data.fixedCode);
    } catch (error) {
      setDebuggedCode("Error: Debugging failed.");
    }
    setLoading(false);
  };

  // Dynamic Theme Support
  const isDarkMode = theme === "dark";
  const bgClass = isDarkMode ? "bg-black text-white" : "bg-white text-black";
  const editorTheme = isDarkMode ? "vs-dark" : "light";

  return (
    <div className={`min-h-screen p-6 ${bgClass}`}>
      <h1 className="text-2xl font-bold mb-4">
        AI Debugger (GPT-4 for Error Fixing)
      </h1>

      {/* Code Input Editor */}
      <Editor
        height="300px"
        language="javascript"
        theme={editorTheme}
        value={code}
        onChange={setCode}
      />

      {/* Debug Button */}
      <button
        onClick={handleDebug}
        className={`px-4 py-2 rounded-md mt-4 ${
          isDarkMode
            ? "bg-green-600 hover:bg-green-700"
            : "bg-green-400 hover:bg-green-500"
        }`}
      >
        {loading ? "Debugging..." : "Fix Errors"}
      </button>

      {/* Debugged Code Output */}
      {debuggedCode && (
        <div
          className={`mt-4 p-4 rounded-md ${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold">Fixed Code:</h3>
          <Editor
            height="200px"
            language="javascript"
            theme={editorTheme}
            value={debuggedCode}
            options={{ readOnly: true }}
          />
        </div>
      )}
    </div>
  );
};

export default BugsFixerPage;
