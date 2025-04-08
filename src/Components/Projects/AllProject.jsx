import './App.css'

function AllProject() {
  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "AI Food Finder",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/300x200",
      liveUrl: "https://example.com/live",
      codeUrl: "https://github.com/example/code",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      image: "https://via.placeholder.com/300x200",
      liveUrl: "https://example.com/live",
      codeUrl: "https://github.com/example/code",
      tech: ["Vue.js", "Firebase", "Tailwind"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills",
      image: "https://via.placeholder.com/300x200",
      liveUrl: "https://example.com/live",
      codeUrl: "https://github.com/example/code",
      tech: ["React", "Tailwind", "Framer Motion"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my latest work and personal projects. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProject
