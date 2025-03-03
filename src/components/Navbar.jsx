import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-600 text-white fixed top-0 left-0 w-full z-50 filter drop-shadow-lg">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Siwaphat</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className='hover:text-gray-400 transition'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition'>About Me</a>
          <a href="#project" className='hover:text-gray-400 transition'>Projects</a>
        </div>

        <div className="hidden md:flex">
          <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full 
            transform transition-transform duration-300 hover:scale-105">
            Contact Me
          </a>
        </div>

        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-4 space-y-4">
          <a href="#home" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#project" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full" onClick={() => setIsOpen(false)}>Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
