import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    
    if (title) title.style.opacity = '1';
    if (title) title.style.transform = 'translateY(0)';
    
    setTimeout(() => {
      if (subtitle) subtitle.style.opacity = '1';
      if (subtitle) subtitle.style.transform = 'translateY(0)';
    }, 400);
    
    setTimeout(() => {
      if (text) text.style.opacity = '1';
      if (text) text.style.transform = 'translateY(0)';
    }, 800);
    
    setTimeout(() => {
      if (button) button.style.opacity = '1';
      if (button) button.style.transform = 'translateY(0)';
    }, 1200);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-6 py-16 z-10 relative">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            Rapelly <span className="text-purple-500">Sai Vinil</span>
          </h1>
          <h2 
            ref={subtitleRef}
            className="text-2xl md:text-3xl text-gray-300 mb-8 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            ML / DL / AI Engineer
          </h2>
          <p 
            ref={textRef}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            Dedicated and innovative Computer Science Engineer with a strong foundation in automation engineering, 
            artificial intelligence, and machine learning. Proven expertise in developing advanced AI-driven tools, 
            enhancing user experiences through optimized workflows, and contributing to cutting-edge projects.
          </p>
          <div 
            ref={buttonRef}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce mt-20">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              <ArrowDown size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;