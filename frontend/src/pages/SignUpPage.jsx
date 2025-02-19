import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Signed Up:", { name, email, password });
  };

  return (
    <div className="flex justify-center font-poppins items-center h-[94vh] bg-black">
      {/* Animated Form Container */}
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-center font-space-grotesk text-[#ECBFBF] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-[#ECBFBF] font-medium">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-black/30 text-white border border-transparent focus:ring-2 focus:ring-[#ECBFBF] focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[#ECBFBF] font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-black/30 text-white border border-transparent focus:ring-2 focus:ring-[#ECBFBF] focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[#ECBFBF] font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-black/30 text-white border border-transparent focus:ring-2 focus:ring-[#ECBFBF] focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-[#ECBFBF] font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-black/30 text-white border border-transparent focus:ring-2 focus:ring-[#ECBFBF] focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold rounded-lg bg-gradient-to-r from-[#5C24FF] to-[#FF3BFF] text-white shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-[#ECBFBF] text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF3BFF] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
