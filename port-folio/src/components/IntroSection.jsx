// Version 2

// import React, { useEffect, useState } from 'react';
// import { ArrowDownIcon } from 'lucide-react';
// import Lottie from 'react-lottie';
// import animationData from '../assets/Animations/CoolGlassesBunnySlow.json';

// const IntroSection = ({ scrollToNextSection }) => {
//   const [offsetY, setOffsetY] = useState(0);
//   const [isCursorVisible, setIsCursorVisible] = useState(true);

//   // Handle parallax scroll effect
//   const handleScroll = () => {
//     setOffsetY(window.scrollY);
//   };

//   // Cursor blink effect
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setIsCursorVisible((prev) => !prev);
//     }, 500); // Blink every 500ms

//     return () => clearInterval(cursorInterval);
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
//         className="absolute text-8xl md:text-9xl font-bold text-red-500 z-10 select-none"
//         style={{
//           transform: `translateY(${offsetY * 0.5 - 220}px)`, // Adjust vertical offset here
//         }}
//       >
//         Aditya Bhadauria
//       </h1>

//       {/* Lottie Animation */}
//       <div className="w-full flex flex-col items-center z-20">
//         <Lottie options={defaultOptions} height={450} width={450} speed={0.75} />

//         {/* Static Text with Blinking Cursor */}
//         <p className="text-2xl md:text-3xl font-semibold text-red-500 mt-8 relative">
//           &lt;FrontEndDev/&gt;
//           {isCursorVisible && <span className="cursor">|</span>} {/* Blinking cursor */}
//         </p>
//       </div>

//       {/* Scroll Button */}
//       <div className="absolute bottom-10">
//         <button onClick={scrollToNextSection} className="text-red-600 flex items-center">
//           <span className="mr-2">CLICK TO SCROLL</span>
//           <ArrowDownIcon size={24} />
//         </button>
//       </div>

//       {/* Cursor CSS */}
//       <style jsx>{`
//         .cursor {
//           display: inline-block;
//           margin-left: 5px; /* Adjust space between text and cursor */
//           animation: blink 0.7s step-end infinite;
//         }

//         @keyframes blink {
//           50% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IntroSection;




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
        className="absolute text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-red-500 z-10 select-none"
        style={{
          transform: `translateY(${offsetY * 0.5 - 220}px)`, // Adjust vertical offset here
        }}
      >
        Aditya Bhadauria
      </h1>

      {/* Lottie Animation */}
      <div className="w-full flex flex-col items-center z-20">
        <Lottie
          options={defaultOptions}
          height={window.innerWidth < 768 ? 250 : 450} // Smaller height on mobile
          width={window.innerWidth < 768 ? 250 : 450} // Smaller width on mobile
          speed={0.75}
        />

        {/* Static Text with Blinking Cursor */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-500 mt-8 relative">
          &lt;Front-End-Dev/&gt;
          {isCursorVisible && <span className="cursor">|</span>} {/* Blinking cursor */}
        </p>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-10">
        <button
          onClick={scrollToNextSection}
          className="text-red-600 flex items-center text-sm sm:text-base"
        >
          <span className="mr-2">CLICK TO SCROLL</span>
          <ArrowDownIcon size={20} />
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
