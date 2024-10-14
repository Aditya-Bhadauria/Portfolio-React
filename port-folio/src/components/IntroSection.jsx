// Version 1


// import React, { useEffect, useState } from 'react';
// import { ArrowDownIcon } from 'lucide-react';
// import Lottie from 'react-lottie';
// import animationData from '../assets/Animations/CoolGlassesBunnySlow.json';

// const IntroSection = ({ scrollToNextSection }) => {
//   const [offsetY, setOffsetY] = useState(0);
//   const [role, setRole] = useState('A Developer');
//   const [fade, setFade] = useState(true);

//   // Handle parallax scroll effect
//   const handleScroll = () => {
//     setOffsetY(window.scrollY);
//   };

//   // Toggle between "A Developer" and "A Designer" with animation
//   useEffect(() => {
//     const toggleRole = setInterval(() => {
//       setFade(false); // Start fade-out
//       setTimeout(() => {
//         setRole((prevRole) => (prevRole === 'A Developer' ? 'A Designer' : 'A Developer'));
//         setFade(true); // Start fade-in after role changes
//       }, 500); // Duration for fade-out before changing text
//     }, 3500); // Duration between text changes

//     return () => clearInterval(toggleRole);
//   }, []);

//   // Scroll listener
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
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
//     <section className="min-h-screen flex items-center justify-center bg-gray-100 w-full relative overflow-hidden">
//       {/* Parallax Background Text */}
//       <h1
//         className="absolute text-8xl md:text-9xl font-bold text-purple-400 z-10 select-none"
//         style={{
//           transform: `translateY(${offsetY * 0.5 - 220}px)`, // Adjust vertical offset here
//         }}
//       >
//         Aditya Bhadauria
//       </h1>

//       {/* Lottie Animation */}
//       <div className="w-full flex flex-col items-center z-20">
//         <Lottie options={defaultOptions} height={450} width={450} speed={0.75} />

//         {/* Animated Role Text */}
//         <p
//           className={`text-2xl md:text-3xl font-semibold text-purple-400 mt-8 transition duration-500 ease-in-out transform ${
//             fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
//           }`}
//         >
//           {role}
//         </p>
//       </div>

//       {/* Scroll Button */}
//       <div className="absolute bottom-10">
//         <button onClick={scrollToNextSection} className="text-purple-600 flex items-center">
//           <span className="mr-2">CLICK TO SCROLL</span>
//           <ArrowDownIcon size={24} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default IntroSection;



// Version 2

import React, { useEffect, useState } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/CoolGlassesBunnySlow.json';

const IntroSection = ({ scrollToNextSection }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  // Handle parallax scroll effect
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 w-full relative overflow-hidden">
      {/* Parallax Background Text */}
      <h1
        className="absolute text-8xl md:text-9xl font-bold text-purple-400 z-10 select-none"
        style={{
          transform: `translateY(${offsetY * 0.5 - 220}px)`, // Adjust vertical offset here
        }}
      >
        Aditya Bhadauria
      </h1>

      {/* Lottie Animation */}
      <div className="w-full flex flex-col items-center z-20">
        <Lottie options={defaultOptions} height={450} width={450} speed={0.75} />

        {/* Static Text with Blinking Cursor */}
        <p className="text-2xl md:text-3xl font-semibold text-purple-400 mt-8 relative">
          &lt;FrontEndDev/&gt;
          {isCursorVisible && <span className="cursor">|</span>} {/* Blinking cursor */}
        </p>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-10">
        <button onClick={scrollToNextSection} className="text-purple-600 flex items-center">
          <span className="mr-2">CLICK TO SCROLL</span>
          <ArrowDownIcon size={24} />
        </button>
      </div>

      {/* Cursor CSS */}
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 5px; /* Adjust space between text and cursor */
          animation: blink 0.7s step-end infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default IntroSection;

