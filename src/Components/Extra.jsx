import React, { useState } from "react";

import { FaFacebook, FaLinkedin, FaInstagram, FaDribbble, FaPinterest} from "react-icons/fa";

const Extra = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 flex justify-between items-center py-6">
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12 mr-3">
            {/* <FaA className="text-xl" /> */}
          </div>
          <span className="text-2xl font-semibold">Alex Smith</span>
        </div>
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <div className="w-8 h-8 flex flex-col justify-around items-center cursor-pointer">
            <span className={`bg-blue-500 h-1 w-full transition-transform ${navOpen ? "transform rotate-45 translate-y-3" : ""}`}></span>
            <span className={`bg-blue-500 h-1 w-full transition-opacity ${navOpen ? "opacity-0" : ""}`}></span>
            <span className={`bg-blue-500 h-1 w-full transition-transform ${navOpen ? "transform -rotate-45 -translate-y-3" : ""}`}></span>
          </div>
        </div>
        <nav
          className={`${
            navOpen ? "right-0" : "-right-full"
          } md:static fixed top-0 bottom-0 bg-gray-900 md:bg-transparent w-2/3 md:w-auto transition-all md:transition-none z-10 md:flex items-center`}
        >
          <ul className="md:flex md:space-x-6 md:items-center">
            <li><a href="#" className="block px-6 py-4 md:p-0 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="block px-6 py-4 md:p-0 hover:text-blue-500">Portfolio</a></li>
            <li><a href="#" className="block px-6 py-4 md:p-0 hover:text-blue-500">Resume</a></li>
            <li><a href="#" className="block px-6 py-4 md:p-0 hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="block px-6 py-4 md:p-0 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-around py-16 px-4">
        {/* Profile Picture */}
        <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-gray-700 shadow-lg">
          <img src="/images/main_photo.jpg" alt="profile" className="w-full h-full object-cover transition-transform hover:scale-110 duration-300" />
        </div>

        {/* Hero Text */}
        <div className="max-w-xl mt-10 md:mt-0 text-center md:text-left">
          <h5 className="text-lg text-gray-400">Hi, I'm <span className="text-blue-500">Frontend Developer</span></h5>
          <h1 className="text-4xl font-bold text-blue-500 my-4">Alex Smith</h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta delectus dolorum
            quibusdam maiores magni quod rem in porro, laborum, laudantium ex repellendus explicabo,
            autem molestiae!
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="#" className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500">Download CV</a>
            <a href="#" className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500">Contact</a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-xl hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-blue-500"><FaLinkedin /></a>
            <a href="#" className="text-xl hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-blue-500"><FaDribbble /></a>
            <a href="#" className="text-xl hover:text-blue-500"><FaPinterest /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
