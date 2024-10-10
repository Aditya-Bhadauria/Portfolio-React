// src/components/ProjectSection.jsx
import React from 'react';

const ProjectSection = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 py-16">
      <div className="w-full px-4 md:max-w-4xl lg:max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-lg sm:text-xl mb-12">From time to time I like to Build open source projects to help the wider web development community.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <div className="w-32 h-32 mb-6">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect width="200" height="200" fill="#E2E8F0" />
                <path d="M100 30 L160 170 L40 170 Z" fill="#805AD5" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">ChronoLog</h3>
            <p className="text-lg mb-4">
              Chronolog is a web application designed to be your one-stop shop for productivity and personal reflection.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full">Try ChronoLog</button>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-32 h-32 mb-6 bg-gray-300"></div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Project 2</h3>
            <p className="text-lg mb-4">Description of your second project goes here.</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
