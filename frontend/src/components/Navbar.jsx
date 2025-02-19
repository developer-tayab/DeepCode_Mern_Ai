import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-full h-[50px] flex items-center   text-white  border-[0.7px] border-[#6d6a6a] shadow-sm  bg-[#000]">
      <div className="container flex justify-between items-center">
        {/* logo text   */}
        <div>
          <h2 className="text-2xl font-bold font-space-grotesk  ">DeepCode</h2>
        </div>
        {/* Links pages  */}
        <div>
          <ul className="flex justify-center items-center gap-10 ">
            <Link to={"/"}>
              <li className="font-poppins font-normal  transition-all 1s linear  hover:border-b-[#D94FD5] py-1 px-1 hover:border-b-[1px] ">
                Home
              </li>
            </Link>
            <Link to={"/services"}>
              <li className="font-poppins font-normal  transition-all 1s linear  hover:border-b-[#D94FD5] py-1 px-1 hover:border-b-[1px] ">
                Services
              </li>
            </Link>
            <Link to={"/profile"}>
              <li className="font-poppins font-normal  transition-all 1s linear  hover:border-b-[#D94FD5] py-1 px-1 hover:border-b-[1px] ">
                Profile
              </li>
            </Link>
          </ul>
        </div>

        {/* dark and light mode & website owner Linkedin Prod¥file Icon  */}
        <div className="flex items-center justify-center gap-6 ">
          <span className="cursor-pointer ">
            <MdDarkMode fontSize={20} />{" "}
          </span>
          <span className="cursor-pointer">
            {" "}
            <IoLogoLinkedin fontSize={20} />{" "}
          </span>
        </div>
      </div>
    </nav>
  );
}
