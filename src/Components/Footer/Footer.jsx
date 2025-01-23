import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#0a0a1a] text-white py-16 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#E3E3E3] mb-2">
          Contact
        </h1>
        <h3 className="text-sm md:text-xl font-light text-gray-300">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg font-medium flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <li className="flex gap-3 items-center hover:text-[#4A90E2] duration-300">
          <MdOutlineEmail size={22} />
          <a
            href="mailto:1nikhilsaini234@gmail.com"
            className="hover:underline"
          >
            1nikhilsaini234@gmail.com
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-[#4A90E2] duration-300">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/nikhilsaini0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-[#4A90E2] duration-300">
          <FaGithub size={22} />
          <a
            href="https://github.com/saini-nikhil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
