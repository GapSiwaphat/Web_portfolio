import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faAddressCard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accentColor = "text-gray-700 ";
  const buttonBg = "bg-gray-900 hover:bg-gray-700"; 
  const buttonText = "text-white"; 

  return (
    <nav className="bg-white text-gray-900 fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-2xl font-light tracking-wider">
          <span className={accentColor}>Gap</span> Siwaphat
        </div>

        <div className="hidden md:flex space-x-10 text-lg font-normal">
          <a href="#hero" className="hover:text-gray-500 transition duration-200 flex items-center">
            <FontAwesomeIcon icon={faHouse} className={`mr-2 text-gray-400`} /> Home
          </a>
          <a href="#about" className="hover:text-gray-500 transition duration-200 flex items-center">
            <FontAwesomeIcon icon={faAddressCard} className={`mr-2 text-gray-400`} /> About Me
          </a>
          <a href="#project" className="hover:text-gray-500 transition duration-200 flex items-center">
            <FontAwesomeIcon icon={faBriefcase} className={`mr-2 text-gray-400`} /> Projects
          </a>
        </div>

        <div className="hidden md:flex">
          <a href="#contact">
            <button
              className={`px-6 py-2 rounded-sm ${buttonBg} ${buttonText} font-medium transition duration-300 shadow-md`}
            >
              Contact
            </button>
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 flex flex-col items-center py-4 space-y-4 shadow-inner">
          <a
            href="#hero"
            className="text-gray-700 hover:text-gray-900 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faHouse} className={`mr-2 text-gray-500`} /> Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faAddressCard} className={`mr-2 text-gray-500`} /> About Me
          </a>
          <a
            href="#project"
            className="text-gray-700 hover:text-gray-900 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faBriefcase} className={`mr-2 text-gray-500`} /> Projects
          </a>
          <a
            href="#contact"
            className={`w-4/5 text-center px-4 py-2 rounded-sm ${buttonBg} ${buttonText} font-medium transition duration-300 shadow-md`}
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;