
import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white text-center font-bold">Skills</h1>
     
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <h2 className="text-lg text-white font-semibold mb-4 w-full">
            Skills
          </h2>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="HTML5">
            <FaHtml5 color="#E34F26" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              HTML5
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="CSS3">
            <FaCss3 color="#1572B6" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              CSS3
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="JavaScript">
            <FaJs color="#F7DF1E" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              JavaScript
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="React">
            <FaReact color="#61DAFB" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              React
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="TypeScript">
            <SiTypescript color="#007ACC" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              TypeScript
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Tailwind CSS">
            <SiTailwindcss color="#38B2AC" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Tailwind CSS
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Redux">
            <SiRedux color="#764ABC" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Redux
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Firebase">
            <SiFirebase color="#FFCA28" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Firebase
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Node.js">
            <FaNodeJs color="#339933" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Node.js
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Postman">
            <SiPostman color="#FF6C37" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Postman
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="MongoDB">
            <SiMongodb color="#47A248" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              MongoDB
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="MySQL">
            <SiMysql color="#4479A1" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              MySQL
            </span>
          </div>
        </div>

        {/* Tools Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <h2 className="text-lg text-white font-semibold mb-4 w-full">
            Tools
          </h2>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Git">
            <FaGitAlt color="#F05032" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Git
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Netlify">
            <SiNetlify color="#00C7B7" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Netlify
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="Vercel">
            <SiVercel color="#000000" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              Vercel
            </span>
          </div>
          <div className="group relative p-3 bg-zinc-950 flex items-center rounded-2xl" title="NPM">
            <SiNpm color="#CB3837" size={50} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
              bg-gray-800 text-white text-xs rounded py-1 px-2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              pointer-events-none z-10">
              NPM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;