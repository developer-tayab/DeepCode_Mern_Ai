import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav>
      {/* logo text   */}
      <div>
        <h2>DeepCode</h2>
      </div>
      {/* Links pages  */}
      <div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/services"}>
            <li>Services</li>
          </Link>
          <Link to={"/profile"}>
            <li>Profile</li>
          </Link>
        </ul>
      </div>

      {/* dark and light mode & website owner Linkedin Prod¥file Icon  */}
      <div>
        <span>
          <MdDarkMode />{" "}
        </span>
        <span>
          {" "}
          <IoLogoLinkedin />{" "}
        </span>
      </div>
    </nav>
  );
}
