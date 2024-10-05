
import React, { useRef } from 'react';
import { ArrowDownIcon, MessageCircleIcon } from 'lucide-react';

const NavigationBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-purple-600">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
          <MessageCircleIcon size={18} />
          <span className="ml-2">HIRE ME</span>
        </button>
      </nav>
    </header>
  );
};



const IntroSection = ({ scrollToNextSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="w-full px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8 lg:pl-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, my name is <span className="text-purple-600">Aditya Bhadauria</span>.</h1>
          <p className="text-xl mb-8">I'm an independent creative developer</p>
          <button onClick={scrollToNextSection} className="text-purple-600 flex items-center">
            <span className="mr-2">SCROLL</span>
            <ArrowDownIcon size={24} />
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-64 h-64">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <rect width="200" height="200" fill="#E2E8F0" />
              <path d="M100 30 L160 170 L40 170 Z" fill="#805AD5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// 

const WorkTogetherSection = ({ forwardedRef, scrollToNextSection }) => {
    return (
      <section ref={forwardedRef} className="min-h-screen flex items-center justify-center bg-white w-full">
        <div className="w-full px-4 md:max-w-4xl lg:max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Let's work together.</h2>
          <p className="text-lg sm:text-xl mb-8">
            From interaction design to scaleable design systems, single-page apps to
            something more experimental with WebGL. I help awesome people to build
            ambitious yet accessible web projects - the wilder, the better.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            About my approach
          </button>
          <button onClick={scrollToNextSection} className="ml-4 text-purple-600 flex items-center">
            <span className="mr-2">SCROLL TO PROJECTS</span>
            <ArrowDownIcon size={24} />
          </button>
        </div>
      </section>
    );
  };
  
  const ProjectSection = ({ forwardedRef }) => {
    return (
      <section ref={forwardedRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 py-16">
        <div className="w-full px-4 md:max-w-4xl lg:max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg sm:text-xl mb-12">
            From time to time I like to Build open source projects to help the wider
            web development community. Below are two of my most popular Projects.
          </p>
          
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
                I'm a big fan of Visual Studio Code, but when I couldn't find a colour scheme I liked, I
                decided to roll my own. SynthWave '84 was the result.
              </p>
              <p className="text-lg mb-6">
                Since I first tweeted about its development the theme has proven to be wildly popular,
                passing one million downloads in September 2022.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
                Try ChronoLog
              </button>
            </div>
            
            {/* Placeholder for the second project */}
            <div className="flex flex-col items-start">
              <div className="w-32 h-32 mb-6 bg-gray-300"></div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Project 2</h3>
              <p className="text-lg mb-4">
                Description of your second project goes here.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const LandingPage = () => {
    const workTogetherRef = useRef(null);
    const projectsRef = useRef(null);
  
    const scrollToWorkTogether = () => {
      workTogetherRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    const scrollToProjects = () => {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <NavigationBar />
        <main>
          <IntroSection scrollToNextSection={scrollToWorkTogether} />
          <WorkTogetherSection forwardedRef={workTogetherRef} scrollToNextSection={scrollToProjects} />
          <ProjectSection forwardedRef={projectsRef} />
        </main>
      </div>
    );
  };
  
  export default LandingPage;


