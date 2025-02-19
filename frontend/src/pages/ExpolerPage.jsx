import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaPlay, FaLanguage, FaClipboardList } from "react-icons/fa";

const tools = [
  {
    title: "AI Code Helper",
    description:
      "Debug your code instantly with AI-powered explanations and suggestions.",
    details: `Our AI-driven system finds logical errors and suggests optimized fixes, helping developers work faster and more efficiently.`,
    link: "/ai-code-helper",
    icon: <FaCode className="text-[#FF3BFF] text-5xl" />,
  },
  {
    title: "AI Live Code Runner",
    description:
      "Run your code directly in the browser with real-time execution.",
    details: `No setup required! Write and execute your code seamlessly within your browser, making debugging easier than ever.`,
    link: "/ai-live-code-runner",
    icon: <FaPlay className="text-[#5C24FF] text-5xl" />,
  },
  {
    title: "AI Code Translator",
    description:
      "Convert code between multiple programming languages seamlessly.",
    details: `Instantly translate code from one programming language to another while maintaining efficiency and structure.`,
    link: "/ai-code-translator",
    icon: <FaLanguage className="text-[#ECBFBF] text-5xl" />,
  },
  {
    title: "AI Interview Preparation",
    description:
      "Generate interview questions based on your resume and coding skills.",
    details: `Prepare for job interviews with AI-curated coding problems and technical questions tailored to your experience.`,
    link: "/ai-interview-prep",
    icon: <FaClipboardList className="text-[#FF3BFF] text-5xl" />,
  },
];

const ExpolerPage = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#FF3BFF]">
          Explore Our AI Tools
        </h1>
        <p className="text-[#ECBFBF] text-lg mt-2">
          Supercharge your development with AI-powered debugging, code
          execution, translation, and interview prep.
        </p>
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer ${
              selectedTool === index ? "scale-105" : "hover:scale-105"
            }`}
            onClick={() =>
              setSelectedTool(selectedTool === index ? null : index)
            }
          >
            <div className="flex items-center gap-4 mb-3">
              {tool.icon}
              <h2 className="text-2xl font-semibold text-[#5C24FF] group-hover:text-[#FF3BFF] transition-colors duration-300">
                {tool.title}
              </h2>
            </div>
            <p className="text-[#ECBFBF]">{tool.description}</p>

            {/* More Details - Expand on Click */}
            {selectedTool === index && (
              <div className="mt-4 p-4 bg-black/30 border border-white/10 rounded-lg">
                <h3 className="text-[#FF3BFF] font-semibold text-lg mb-2">
                  How It Works
                </h3>
                <p className="text-[#ECBFBF]">{tool.details}</p>
                <Link
                  to={tool.link}
                  className="mt-2 inline-block text-[#FF3BFF] hover:underline font-medium"
                >
                  Try Now →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-[#ECBFBF]">
          Built for developers, powered by AI. 🚀
        </p>
      </div>
    </div>
  );
};

export default ExpolerPage;
