import React from "react";
// import nutriscanImg from "../../assets/nutriscan.png"; // Make sure to uncomment the correct image import

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className="relative p-4 md:p-6 flex flex-col w-full max-w-xs bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <img 
        className="p-4 rounded-lg object-cover h-48 w-full transition-all duration-500 hover:scale-110" 
        src={image} 
        alt={`Banner for ${title}`} 
      />
      <div className="absolute top-4 left-4 z-10 text-white font-semibold bg-opacity-50 bg-black px-2 py-1 rounded-full text-xs">
        New
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white px-4 mt-4">{title}</h3>
      <p className="text-sm md:text-md text-gray-300 px-4 py-2">{main}</p>
      <div className="mt-4 p-2 md:p-4 flex gap-4 justify-between">
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#4A90E2] border-2 border-[#4A90E2] text-white rounded-full text-sm font-semibold hover:bg-transparent hover:text-[#4A90E2] transition duration-300"
        >
          Demo
        </a>
        <a 
          href={sourceLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#5A5A5A] border-2 border-[#5A5A5A] text-white rounded-full text-sm font-semibold hover:bg-transparent hover:text-[#5A5A5A] transition duration-300"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
