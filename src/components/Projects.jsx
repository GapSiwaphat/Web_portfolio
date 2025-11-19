import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const projects = [
  {
    id: 1,
    name: "Project CRUD",
    technologies: "CRUD API implementation using Specify Technology",
    image: Project1,
    github: "https://github.com/GapSiwaphat/Crud_Api",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    technologies: "E-commerce website selling agricultural products online, built with Specify Tech Stack",
    image: Project2,
    github: "https://github.com/GapSiwaphat/project-website.git",
  },

];

const Projects = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-20" id="project">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider border-b-2 border-gray-300 inline-block mx-auto pb-2">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl 
              group relative overflow-hidden"
            >
              
              <div className="mb-4 overflow-hidden rounded-md">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover rounded-md 
                  transition-all duration-500 group-hover:scale-110 group-hover:grayscale" 
                />
              </div>
              
              <h3 className="text-2xl font-normal mb-1 tracking-wide">{project.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{project.technologies}</p>
              
              <a 
                href={project.github} 
                className="inline-flex items-center space-x-2 bg-gray-900 text-white 
                px-4 py-2 rounded-sm font-medium transition duration-300 
                hover:bg-gray-700" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                <span>View Code</span>
              </a>
              
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-900 rounded-lg transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;