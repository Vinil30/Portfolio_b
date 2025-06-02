import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="z-10">
            <h3 className="text-2xl font-bold mb-6 text-white">Sai Vinil</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              ML/DL/AI Engineer passionate about developing innovative AI solutions to solve complex real-world problems.
            </p>
            <div className="flex space-x-5 mt-6">
              <a
                href="https://github.com/Vinil30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-purple-900/20"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rapelly-sai-vinil-02437228b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-purple-900/20"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="mailto:rapellysaivinil@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-purple-900/20"
                aria-label="Email"
              >
                <HiOutlineMail className="text-xl" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-purple-900/20"
                aria-label="Resume"
              >
                <HiOutlineDocumentText className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="z-10">
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 inline-block py-1">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 inline-block py-1">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 inline-block py-1">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 inline-block py-1">Contact</a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="z-10">
            <h3 className="text-2xl font-bold mb-6 text-white">Technologies</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Machine Learning
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Deep Learning
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                LLMs & RAG
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                NLP & Computer Vision
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="z-10">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Hyderabad, India
              </p>
              <p className="text-gray-300 flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +91 938 146 8568
              </p>
              <p className="text-gray-300 flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:rapellysaivinil@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
                  rapellysaivinil@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center z-10">
          <p className="text-gray-400">
            &copy; {currentYear} Sai Vinil. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/10 to-transparent -z-0"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl -z-0"></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-800/5 blur-3xl -z-0"></div>
    </footer>
  );
};

export default Footer;