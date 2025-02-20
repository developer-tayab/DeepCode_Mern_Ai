import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { contextApi } from "../context/Context";

export default function Navbar() {
  const { theme, setTheme } = useContext(contextApi);
  const location = useLocation();

  return (
    <nav
      className={`w-full h-[46px] flex items-center py-2 border-b-[0.7px] shadow-sm transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-black border-gray-300"
          : "bg-black text-white border-[#6d6a6a]"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <h2 className="text-2xl font-bold font-space-grotesk">DeepCode</h2>
          </div>
        </Link>

        {/* Navigation Links */}
        <div>
          <ul className="flex justify-center items-center gap-10">
            {["/", "/services", "/profile"].map((path, index) => (
              <Link key={index} to={path}>
                <li
                  className={`font-poppins font-normal transition-all duration-300 hover:border-b-[#D94FD5] py-1 px-1 hover:border-b-[1px] ${
                    location.pathname === path &&
                    "border-b-[1px] border-[#D94FD5]"
                  }`}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Theme Toggle & LinkedIn Icon */}
        <div className="flex items-center justify-center gap-6">
          {/* Dark/Light Mode Toggle */}
          <span className="cursor-pointer">
            {theme === "light" ? (
              <MdDarkMode
                fontSize={20}
                onClick={() => setTheme("dark")}
                className="transition-transform duration-300 hover:scale-110"
              />
            ) : (
              <MdLightMode
                fontSize={20}
                onClick={() => setTheme("light")}
                className="transition-transform duration-300 hover:scale-110"
              />
            )}
          </span>

          {/* LinkedIn Icon */}
          <Link to={"https://www.linkedin.com/in/m-tayaib/"}>
            <span className="cursor-pointer">
              <IoLogoLinkedin
                fontSize={20}
                className="transition-transform duration-300 hover:scale-110"
              />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
