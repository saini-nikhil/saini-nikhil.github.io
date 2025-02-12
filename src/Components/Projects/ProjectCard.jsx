import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceLink, techStack = [] }) => {
  return (
    <div className="group relative p-4 md:p-6 flex flex-col w-full max-w-sm bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl rounded-2xl overflow-hidden 
                    transition-all duration-500 ease-in-out 
                    hover:shadow-2xl hover:border-blue-500/50 hover:scale-105 hover:bg-gray-800/80
                    hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl h-56">
        <img 
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" 
          src={image} 
          alt={`Banner for ${title}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* New Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full font-medium 
                       transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600/90">
          New
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mt-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">{title}</h3>
        <p className="text-sm text-gray-300 flex-1 transition-colors duration-300 group-hover:text-gray-200">{main}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium text-gray-200 bg-gray-700/50 border border-gray-600 rounded-full
                         transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-gray-700/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-600 text-center text-white rounded-lg font-medium 
                     transition-all duration-300 hover:bg-blue-700 active:scale-95
                     group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
            Live Demo
          </a>
          <a 
            href={sourceLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gray-700 text-center text-white rounded-lg font-medium 
                     transition-all duration-300 hover:bg-gray-600 active:scale-95
                     group-hover:shadow-lg group-hover:shadow-gray-500/20"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;