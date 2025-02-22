import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { contextApi } from "../context/Context";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typewriter } from "react-simple-typewriter";

const BugsFixerPage = () => {
  const { theme } = useContext(contextApi);
  const [code, setCode] = useState("// Paste your code here...");
  const [debuggedCode, setDebuggedCode] = useState("");
  const [typedCode, setTypedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDebug = async () => {
    setLoading(true);
    setDebuggedCode(""); // Clear previous output
    setTypedCode(""); // Reset typing animation

    try {
      const response = await axios.post(
        "http://localhost:3000/api/services/ai-bugs-fixer",
        { code }
      );

      if (response.data.fixedCode) {
        setDebuggedCode(response.data.fixedCode);
      } else {
        setDebuggedCode("**Error:** No response received.");
      }
    } catch (error) {
      setDebuggedCode("**Error:** Debugging failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">AI Bug Fixer</h1>

      {/* Code Input Editor */}
      <Editor
        height="300px"
        language="javascript"
        theme={theme === "dark" ? "vs-dark" : "light"}
        value={code}
        onChange={setCode}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />

      {/* Debug Button */}
      <button
        onClick={handleDebug}
        disabled={loading}
        className={`px-4 py-2 rounded-md mt-4 transition ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : theme === "dark"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-green-400 hover:bg-green-500"
        }`}
      >
        {loading ? "Debugging..." : "Fix Errors"}
      </button>

      {/* Debugged Code Output */}
      {debuggedCode && (
        <div
          className={`mt-4 p-4 rounded-md transition ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold">Fixed Code:</h3>

          {/* Typewriter Animation */}
          {typedCode === "" ? (
            <Typewriter
              words={[debuggedCode]}
              loop={1}
              cursor
              cursorStyle={`${theme === "dark" ? "⚪" : "⚫"}`}
              typeSpeed={15}
              deleteSpeed={0}
              onLoopDone={() => setTypedCode(debuggedCode)}
            />
          ) : (
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const cleanCode = String(children).trim();

                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={dracula}
                      language={match[1]}
                      {...props}
                    >
                      {cleanCode}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                p({ children }) {
                  if (
                    typeof children === "string" &&
                    children.includes("```")
                  ) {
                    return null;
                  }
                  return <p>{children}</p>;
                },
              }}
            >
              {typedCode}
            </Markdown>
          )}
        </div>
      )}
    </div>
  );
};

export default BugsFixerPage;
