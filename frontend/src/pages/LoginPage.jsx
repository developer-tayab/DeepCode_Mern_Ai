import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { contextApi } from "../context/Context";

const LoginPage = () => {
  const { theme } = useContext(contextApi);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", { email, password });
  };

  return (
    <div
      className={`flex justify-center font-poppins items-center h-[94vh] transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      {/* Animated Form Container */}
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-xl border transition-transform transform hover:scale-105 duration-300 ${
          theme === "light"
            ? "bg-gray-100 border-gray-300 text-black"
            : "bg-white/10 backdrop-blur-lg border-white/20 text-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center font-space-grotesk mb-6 ${
            theme === "light" ? "text-gray-800" : "text-[#ECBFBF]"
          }`}
        >
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className={`block font-medium ${
                theme === "light" ? "text-gray-700" : "text-[#ECBFBF]"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 mt-1 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 ${
                theme === "light"
                  ? "bg-white border-gray-300 text-black focus:ring-[#5C24FF]"
                  : "bg-black/30 border-transparent text-white focus:ring-[#ECBFBF]"
              }`}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              className={`block font-medium ${
                theme === "light" ? "text-gray-700" : "text-[#ECBFBF]"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 mt-1 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 ${
                theme === "light"
                  ? "bg-white border-gray-300 text-black focus:ring-[#5C24FF]"
                  : "bg-black/30 border-transparent text-white focus:ring-[#ECBFBF]"
              }`}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold rounded-lg bg-gradient-to-r from-[#5C24FF] to-[#FF3BFF] text-white shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p
          className={`text-center mt-4 ${
            theme === "light" ? "text-gray-700" : "text-[#ECBFBF]"
          }`}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF3BFF] hover:underline transition-all duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
