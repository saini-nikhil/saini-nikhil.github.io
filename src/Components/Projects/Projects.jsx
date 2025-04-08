import React from "react";
import ProjectCard from "./ProjectCard";
import nutriscanImg from "../../assets/nutriscan.png";
import mealmasterImg from "../../assets/MealMaster.png";
import virtualclasroomImg from "../../assets/virtualclasroom.png";
import aiFoodFinderImg from "../../assets/AiFoodFinderimg.png";



const Projects = () => {

  const projectsData = [
    {
      title: "AI Food Finder",
      main: "AI Food Finder is a smart voice assistant that helps users discover the top 5 or 10 restaurants in their area. It also features an AI-powered recipe generator for home cooking and a Gemini chatbot for interactive support. Built using React, Firebase, and ZegoCloud for seamless user interaction.",
      image: aiFoodFinderImg,
      demoLink: "https://aifoodfinder.vercel.app", 
      sourceLink: "https://github.com/saini-nikhil/AiFoodFinder", 
      techStack: ["React", "Firebase Authentication", "Gemini AI", "Tailwind CSS", "Google Maps Api"]
    },
    {
      title: "NutriScan App",
      main: "QR-based app that scans food QR codes to provide instant calorie and nutritional information, helping users track their dietary intake and make informed food choices.",
      image: nutriscanImg,
      demoLink: "https://nutri-scan-site.vercel.app/",
      sourceLink: "https://github.com/saini-nikhil/NutriScan",
      techStack: ["React", "Node.js", "Firebase", "Tailwind CSS", "QR API" , "MongoDb"]
    },
    {
      title: "MealMaster",
      main: "MealMaster is a meal planning application designed to help users create meal plans, track nutrition, and promote healthy eating habits. It offers personalized meal plans based on dietary preferences and goals.",
      image: mealmasterImg,
      demoLink: "https://mealmaster01.vercel.app/#",
      sourceLink: "https://github.com/saini-nikhil/MealMaster",
      techStack: ["React", "Tailwind CSS",  "Firbase Authentication" , "Firestore Database" , "Gemini API" ]
    },
    {
      title: "Virtual Classroom",
      main: "Virtual Classroom is a web application that enables real-time video conferencing and interactive learning experiences. Built using React, this app leverages ZegoCloud for video and audio streaming.",
      image: virtualclasroomImg,
      demoLink: "https://virtual-class-rooms01.vercel.app/#",
      sourceLink: "https://github.com/saini-nikhil/Virtual_class_room",
      techStack: ["React", "Firbase Authentication", "ZegoCloud", "Tailwind CSS"]
    }
   
    
  ];

  return (
    <div id="Projects" className="py-12 px-8 md:px-24 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#E3E3E3] mb-12">
        My Projects
      </h1>
      <div className="py-12 flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <a href="https://show-projects-tan.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
            More Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;