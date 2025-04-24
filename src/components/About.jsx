import React from "react";
import Profile from "../assets/1.png";

const About = () => {
  return (
    <div className="bg-[rgba(49,46,129,0.9)] backdrop-blur-md text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 filter drop-shadow-lg">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Profile}
            alt="Profile"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              ผมนาย ศิวภัทร มูลมา ปัจจุบันอายุ 21 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏอุดรธานี มีความสนใจและมุ่งมั่นที่จะพัฒนาตัวเองในสายงาน Software Developer
            </p>

            <div className="flex justify-center md:justify-start space-x-8 mt-6">
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12 mx-auto" />
                <p className="mt-2 text-sm">HTML</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12 mx-auto" />
                <p className="mt-2 text-sm">CSS</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mx-auto" />
                <p className="mt-2 text-sm">JavaScript</p>
              </div>
              <div className="text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React JS" className="w-12 h-12 mx-auto" />
                <p className="mt-2 text-sm">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
