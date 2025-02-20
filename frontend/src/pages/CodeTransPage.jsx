import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { contextApi } from "../context/Context";

const CodeTransPage = () => {
  const { theme } = useContext(contextApi); // Get theme from context
  const [code, setCode] = useState("// Write your code here...");
  const [translatedCode, setTranslatedCode] = useState("");
  const [fromLang, setFromLang] = useState("javascript");
  const [toLang, setToLang] = useState("python");
  const [loading, setLoading] = useState(false);

  // Function to translate code
  const handleTranslate = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/translate", {
        code,
        fromLang,
        toLang,
      });
      setTranslatedCode(response.data.translatedCode);
    } catch (error) {
      setTranslatedCode("Error: Translation failed.");
    }
    setLoading(false);
  };

  // Dynamic theme classes
  const isDarkMode = theme === "dark";
  const bgClass = isDarkMode ? "bg-black text-white" : "bg-white text-black";
  const editorTheme = isDarkMode ? "vs-dark" : "light";

  return (
    <div className={`min-h-screen p-6 ${bgClass}`}>
      <h1 className="text-2xl font-bold mb-4">AI Code Translator</h1>

      {/* Language Selection */}
      <div className="flex gap-4 mb-4">
        <select
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
          className={`p-2 ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
        <span>➡</span>
        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className={`p-2 ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      {/* Monaco Editor */}
      <Editor
        height="300px"
        language={fromLang}
        theme={editorTheme}
        value={code}
        onChange={setCode}
      />

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        className={`px-4 py-2 rounded-md mt-4 ${
          isDarkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-400 hover:bg-blue-500"
        }`}
      >
        {loading ? "Translating..." : "Translate Code"}
      </button>

      {/* Translated Code Output */}
      {translatedCode && (
        <div
          className={`mt-4 p-4 rounded-md ${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold">Translated Code:</h3>
          <Editor
            height="200px"
            language={toLang}
            theme={editorTheme}
            value={translatedCode}
            options={{ readOnly: true }}
          />
        </div>
      )}
    </div>
  );
};

export default CodeTransPage;
