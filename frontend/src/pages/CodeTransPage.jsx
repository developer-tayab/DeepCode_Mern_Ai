import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { contextApi } from "../context/Context";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const CodeTransPage = () => {
  const { theme } = useContext(contextApi); // Get theme from context
  const [code, setCode] = useState("// Write your code here...");
  const [translatedCode, setTranslatedCode] = useState("");
  const [fromLang, setFromLang] = useState("javascript");
  const [toLang, setToLang] = useState("python");
  const [loading, setLoading] = useState(false);

  // Handle code translation request
  const handleTranslate = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/services/code-translator",
        { code, fromLang, toLang },
        { withCredentials: true }
      );
      setTranslatedCode(data.translatedCode);
    } catch (error) {
      setTranslatedCode("Error: Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  // Theme-based styling
  const isDarkMode = theme === "dark";
  const themeClasses = isDarkMode
    ? "bg-black text-white"
    : "bg-white text-black";
  const editorTheme = isDarkMode ? "vs-dark" : "light";

  return (
    <div className={`min-h-screen p-6 ${themeClasses}`}>
      <h1 className="text-2xl font-bold mb-4">AI Code Translator</h1>

      {/* Language Selection */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <select
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
          className={`p-2 rounded-md ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
        <span className="text-lg">➡</span>
        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className={`p-2 rounded-md ${
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
        disabled={loading}
        className={`px-4 py-2 rounded-md mt-4 transition ${
          loading ? "cursor-not-allowed opacity-50" : ""
        } ${
          isDarkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-500 hover:bg-blue-600"
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
            {translatedCode}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default CodeTransPage;
