import { Link } from "react-router-dom";
import { FaCode, FaPlay, FaLanguage, FaClipboardList } from "react-icons/fa";
import { contextApi } from "../context/Context";
import { useContext } from "react";

const services = [
  {
    title: "AI Code Helper",
    description:
      "Debug your code instantly with AI-powered explanations and suggestions.",
    link: "/ai-code-helper",
    icon: <FaCode className="text-[#FF3BFF] text-4xl" />,
  },
  {
    title: "AI Live Code Runner",
    description:
      "Run your code directly in the browser with real-time execution.",
    link: "/ai-code-runner",
    icon: <FaPlay className="text-[#5C24FF] text-4xl" />,
  },
  {
    title: "AI Code Translator",
    description:
      "Convert code between multiple programming languages seamlessly.",
    link: "/ai-code-translator",
    icon: <FaLanguage className="text-[#ECBFBF] text-4xl" />,
  },
  {
    title: "AI Interview Preparation",
    description:
      "Generate interview questions based on your resume and coding skills.",
    link: "/ai-interview-prep",
    icon: <FaClipboardList className="text-[#FF3BFF] text-4xl" />,
  },
];

const ServicePage = () => {
  const { theme } = useContext(contextApi);

  return (
    <div
      className={`h-[94vh] px-6 py-12 flex flex-col items-center transition-all duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-[#FF3BFF] mb-6 text-center">
        AI-Powered Developer Tools
      </h1>
      <p
        className={`text-lg text-center max-w-2xl ${
          theme === "light" ? "text-gray-700" : "text-[#ECBFBF]"
        }`}
      >
        Supercharge your development workflow with our AI-driven tools. Optimize
        code, debug instantly, and enhance your programming skills.
      </p>

      {/* Service Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 border rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group ${
              theme === "light"
                ? "bg-gray-100 border-gray-300 text-black"
                : "bg-white/10 backdrop-blur-md border-white/20 text-white"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              {service.icon}
              <h2 className="text-2xl font-semibold text-[#5C24FF] group-hover:text-[#FF3BFF] transition-colors duration-300">
                {service.title}
              </h2>
            </div>
            <p
              className={`mb-4 ${
                theme === "light" ? "text-gray-600" : "text-[#ECBFBF]"
              }`}
            >
              {service.description}
            </p>
            <Link
              to={service.link}
              className="text-[#FF3BFF] hover:underline font-medium flex items-center gap-2"
            >
              Explore →
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <p
          className={`${
            theme === "light" ? "text-gray-600" : "text-[#ECBFBF]"
          }`}
        >
          Built for developers, powered by AI. 🚀
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
