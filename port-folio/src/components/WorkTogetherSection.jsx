// src/components/WorkTogetherSection.jsx
import React from 'react';
import { ArrowDownIcon } from 'lucide-react';

const WorkTogetherSection = ({ forwardedRef, scrollToNextSection }) => {
  return (
    <section ref={forwardedRef} className="min-h-screen flex items-center justify-center bg-white w-full">
      <div className="w-full px-4 md:max-w-4xl lg:max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Let's work together.</h2>
        <p className="text-lg sm:text-xl mb-8">
          From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full">About my approach</button>
        <button onClick={scrollToNextSection} className="ml-4 text-purple-600 flex items-center">
          <span className="mr-2">SCROLL TO PROJECTS</span>
          <ArrowDownIcon size={24} />
        </button>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
