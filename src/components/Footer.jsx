import { useState, useEffect } from 'react';
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50; 

    if (isBottom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerClasses = `
    fixed bottom-0 left-0 w-full z-40 
    bg-gray-900 text-white py-10 
    transition-transform duration-500 ease-out
    ${isVisible ? 'translate-y-0' : 'translate-y-full'}
  `;

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-light tracking-wider mb-1">SIWAPHAT</h3>
            <p className="text-gray-400 text-sm">
             I am committed to working in web development.
            </p>
          </div>
          
          <div className="flex space-x-6 text-2xl">
            <a 
              href="https://www.facebook.com/gap.siwaphat" 
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://github.com/GapSiwaphat" 
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div
          className="border-t border-gray-700 pt-6 flex justify-center"
        >
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} SIWAPHAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;