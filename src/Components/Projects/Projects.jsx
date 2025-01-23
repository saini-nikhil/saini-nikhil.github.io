import React from "react";
import ProjectCard from "./ProjectCard";
import nutriscanImg from "../../assets/nutriscan.png"; // Make sure to import images correctly

const Projects = () => {
  const projectsData = [
    {
      title: "NutriScan App",
      main: "QR-based app that scans food QR codes to provide instant calorie and nutritional information, helping users track their dietary intake and make informed food choices.",
      image: nutriscanImg,
      demoLink: "https://nutri-scan-site.vercel.app/",
      sourceLink: "https://github.com/jitenverma076/Nutri-scan"
    },
    {
      title: "YouTube Clone",
      main: "A YouTube clone created with Next.js, replicating the main features of YouTube such as video streaming and user interaction.",
      image: nutriscanImg,
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Netflix Clone",
      main: "A Netflix clone built using React and styled-components, featuring a modern UI and interactive movie streaming.",
      image: nutriscanImg,
      demoLink: "#",
      sourceLink: "#"
    }
  ];

  return (
    <div id="Projects" className=" py-12 px-8 md:px-24 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#E3E3E3] mb-12">My Projects</h1>
      <div className="py-12 flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            main={project.main}
            image={project.image}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
