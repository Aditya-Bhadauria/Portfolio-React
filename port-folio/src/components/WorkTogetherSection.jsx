
// import { useRef, useEffect, useState } from 'react';
// import Lottie from 'react-lottie';
// import { ArrowDownIcon } from 'lucide-react';
// import animationData from '../assets/Animations/DeskPopup.json';

// const WorkTogetherSection = ({ forwardedRef, scrollToNextSection }) => {
//   const animationRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Intersection Observer to trigger animation on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );
//     if (animationRef.current) {
//       observer.observe(animationRef.current);
//     }
//     return () => {
//       if (animationRef.current) {
//         observer.unobserve(animationRef.current);
//       }
//     };
//   }, []);

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   return (
//     <section
//       ref={forwardedRef}
//       className="min-h-screen flex flex-col items-center justify-center bg-white w-full relative text-center"
//     >
//       {/* About Me Section */}
//       <div className="w-full max-w-3xl mb-8 px-4">
//         <h2 className="text-6xl md:text-7xl font-bold text-red-600 mb-4">About me</h2>
//         <p className="text-xl md:text-2xl mb-6">
//           I'm Aditya Bhadauria, a passionate full-stack developer with a knack for building dynamic web applications. I specialize in creating scalable and efficient solutions.
//         </p>

//         {/* Lottie Animation */}
//         <div ref={animationRef} className={`transition-transform duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
//           <Lottie options={defaultOptions} height={250} width={250} />
//         </div>
//       </div>

//       {/* Scroll to Projects Button */}
//       <button onClick={scrollToNextSection} className="absolute bottom-8 text-red-600 flex items-center">
//         <span className="mr-2">SCROLL TO PROJECTS</span> 
//         <ArrowDownIcon size={24} />
//       </button>
//     </section>
//   );
// };

// export default WorkTogetherSection;



import { useRef, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { ArrowDownIcon } from "lucide-react";
import animationData from "../assets/Animations/DeskPopup.json";

const WorkTogetherSection = ({ forwardedRef, scrollToNextSection }) => {
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      ref={forwardedRef}
      className="min-h-screen flex flex-col items-center justify-center bg-white w-full relative text-center px-6"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between text-left">
        {/* About Me Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl md:text-7xl font-bold text-red-600 mb-4">
            About me
          </h2>
          <p className="text-xl md:text-2xl">
            I'm Aditya Bhadauria, a passionate full-stack developer with a knack
            for building dynamic web applications. I specialize in creating
            scalable and efficient solutions.
          </p>
        </div>

        {/* Lottie Animation */}
        <div
          ref={animationRef}
          className={`w-full md:w-1/2 flex justify-center transition-transform duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>

      {/* Scroll to Projects Button */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 text-red-600 flex items-center"
      >
        <span className="mr-2">SCROLL TO PROJECTS</span>
        <ArrowDownIcon size={24} />
      </button>
    </section>
  );
};

export default WorkTogetherSection;






