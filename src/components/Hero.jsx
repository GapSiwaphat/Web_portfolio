import icon from "../assets/img1.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const accentColor = "text-teal-600";
  const buttonColor = "bg-teal-600 hover:bg-teal-700";

  return (
    <section
      className="bg-white text-gray-900 min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24"
      id="hero"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-500 font-light mb-3 uppercase tracking-widest">
            Hello, I'm
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block">Siwaphat Moonma</span>
            <span className={`block ${accentColor}`}>
              <span className="inline-block min-w-[200px]">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Front-end Engineer", "UX Enthusiast"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                    cursor: "_",
                  }}
                />
              </span>
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-lg mx-auto md:mx-0 font-light">
            <Typewriter
              options={{
                strings: [
                  "Committed to building clean, efficient, and user-focused digital experiences with a professional approach.",
                ],
                autoStart: true,
                loop: false,
                delay: 40,
                deleteSpeed: 0,
                cursor: "|",
              }}
            />
          </p>

          <div className="mt-12">
            <a href="#contact">
              <button
                className={`${buttonColor} text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50`}
              >
                Contact With Me
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="p-1 border border-gray-200 rounded-xl shadow-xl">
            <img
              src={icon}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;