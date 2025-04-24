import React from 'react';
import HeroImage from '../assets/1.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-600 text-white h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 text-center md:text-left">
      
      <div className="md:w-1/3 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Siwaphat Moonma
          </span>
          , Web Developer
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          I am committed to working in web development.
        </p>
        <div className="mt-6">
          <a href="#contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105">
              Contact With Me
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={HeroImage}
          alt="Profile"
          className="w-40 md:w-64 h-40 md:h-64 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg"
        />
      </div>

    </div>
  );
};

export default Hero;
