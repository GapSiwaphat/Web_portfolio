import Profile from "../assets/1.png";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-black py-20" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-1xl shadow-lg p-6 flex justify-center">
            <img
              src={Profile}
              alt="Profile"
              className="w-64 h-80 rounded-md object-cover"
            />
          </div>

          <div className="bg-white rounded-md shadow-lg p-6">
            <h1 className="font-bold text-2xl text-center mb-10 md:text-center bg-gradient-to-r from-pink-100 to-blue-100 rounded-full py-2 px-6 shadow-md">personal record</h1>
            <p className="text-lg leading-relaxed">
              ผมนาย ศิวภัทร มูลมา ปัจจุบันอายุ 21 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏอุดรธานี<br />
              มีความสนใจและมุ่งมั่นที่จะพัฒนาตัวเองในสายงาน Software Developer
            </p>
          </div>

          <div className="bg-white rounded-md shadow-lg p-6">
            <h3 className="text-2xl font-bold text-center md:text-center mb-10 bg-gradient-to-r from-pink-100 to-blue-100 rounded-full py-2 px-6 shadow-md">Skills</h3>
            {[
              { name: "HTML", percent: 80 },
              { name: "CSS", percent: 50 },
              { name: "JavaScript", percent: 40 },
              { name: "React", percent: 30 },
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
