import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { MdEmail, MdDateRange, MdVerifiedUser } from "react-icons/md";
import { contextApi } from "../context/Context";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { theme, setIsAuthenticated } = useContext(contextApi); // Get theme from context

  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "March 2023",
    membership: "Premium",
  });

  const handleLogout = () => {
    console.log("User Logged Out");
    setIsAuthenticated(false);
    navigate("/");
    // Implement logout logic (e.g., remove token, redirect to login)
  };

  return (
    <div
      className={`h-[94vh] flex flex-col items-center px-6 py-10 transition-all duration-300 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-black text-white"
      }`}
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <FaUserCircle
          className={`text-8xl ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        />
        <div>
          <h2 className="text-3xl font-semibold">{user.name}</h2>
          <p
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            {user.email}
          </p>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-2xl">
        {/* Membership Detail */}
        <div
          className={`p-4 rounded-lg shadow-md flex items-center transition-all duration-300 ${
            theme === "light"
              ? "bg-white border border-gray-300"
              : "bg-gray-900"
          }`}
        >
          <MdVerifiedUser className="text-[#5C24FF] text-3xl mr-4" />
          <div>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Membership
            </p>
            <p className="text-lg font-semibold">{user.membership}</p>
          </div>
        </div>

        {/* Joined Date */}
        <div
          className={`p-4 rounded-lg shadow-md flex items-center transition-all duration-300 ${
            theme === "light"
              ? "bg-white border border-gray-300"
              : "bg-gray-900"
          }`}
        >
          <MdDateRange className="text-[#FF3BFF] text-3xl mr-4" />
          <div>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Joined
            </p>
            <p className="text-lg font-semibold">{user.joined}</p>
          </div>
        </div>

        {/* Email Detail */}
        <div
          className={`p-4 rounded-lg shadow-md flex items-center transition-all duration-300 ${
            theme === "light"
              ? "bg-white border border-gray-300"
              : "bg-gray-900"
          }`}
        >
          <MdEmail className="text-[#ECBFBF] text-3xl mr-4" />
          <div>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Email
            </p>
            <p className="text-lg font-semibold">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className={`mt-10 px-6 py-2 flex items-center gap-2 rounded-md transition-all duration-300 ${
          theme === "light"
            ? "bg-gray-200 text-black hover:bg-gray-300"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
