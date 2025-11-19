import Profile from "../assets/1.png";

const About = () => {
  return (
    <div className="bg-white text-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider border-b-2 border-gray-300 inline-block mx-auto pb-2">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group relative bg-gray-100 rounded-lg shadow-xl p-6 flex justify-center transition duration-300 hover:shadow-2xl">
            <img
              src={Profile}
              alt="Profile"
              className="w-64 h-80 rounded-md object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-900 rounded-lg transition duration-500 pointer-events-none"></div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200 transition duration-300 hover:shadow-2xl">
            <h1 className="font-normal text-2xl text-center mb-8 tracking-wider border-b border-gray-300 pb-2">
              Personal Record
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              ผมนาย ศิวภัทร มูลมา ปัจจุบันอายุ 21 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏอุดรธานี
              <br /><br />
              มีความสนใจและมุ่งมั่นที่จะพัฒนาตัวเองในสายงาน Software Developer
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200 transition duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-normal text-center mb-8 tracking-wider border-b border-gray-300 pb-2">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg font-medium text-gray-700">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Git/GitHub",
                "Node.js (Basic)",
                "Database (SQL)",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;