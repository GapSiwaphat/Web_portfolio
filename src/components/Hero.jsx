import HeroImage from "../assets/icon.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      className="bg-gradient-to-r from-pink-100 to-blue-100 text-white h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 text-center md:text-left"
      id="hero"
    >
      <div className="md:w-1/3 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black mt-10">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            <span className="inline-block min-w-[200px]">
              <Typewriter
                options={{
                  strings: ["SiwaphatMoonma", ",WebDeveloper"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 0,
                  cursor: "|",
                }}
              />
            </span>
          </span>
        </h1>

        <p className="mt-4 text-base md:text-2xl text-black">
          <Typewriter
            options={{
              strings: [" I am committed to working in web development."],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 0,
              cursor: "|",
            }}
          />
        </p>

        <div className="mt-6">
          <a href="#contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105">
              Contact With Me
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 ">
        <img
          src={HeroImage}
          alt="Profile"
          className="w-52 md:w-80 h-64 md:h-96  object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
