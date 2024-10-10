
import React, { useRef } from 'react';
import NavigationBar from '../components/NavigationBar';
import IntroSection from '../components/IntroSection';
import WorkTogetherSection from '../components/WorkTogetherSection';
import ProjectSection from '../components/ProjectSection';

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
