// src/components/ProjectSection.jsx
// import React from 'react';

// const ProjectSection = ({ forwardedRef }) => {
//   return (
//     <section ref={forwardedRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 py-16">
//       <div className="w-full px-4 md:max-w-4xl lg:max-w-6xl">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projects</h2>
//         <p className="text-lg sm:text-xl mb-12">From time to time I like to Build open source projects to help the wider web development community.</p>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="flex flex-col items-start">
//             <div className="w-32 h-32 mb-6">
//               <svg viewBox="0 0 200 200" className="w-full h-full">
//                 <rect width="200" height="200" fill="#E2E8F0" />
//                 <path d="M100 30 L160 170 L40 170 Z" fill="#805AD5" />
//               </svg>
//             </div>
//             <h3 className="text-2xl sm:text-3xl font-bold mb-4">ChronoLog</h3>
//             <p className="text-lg mb-4">
//               Chronolog is a web application designed to be your one-stop shop for productivity and personal reflection.
//             </p>
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-full">Try ChronoLog</button>
//           </div>
          
//           <div className="flex flex-col items-start">
//             <div className="w-32 h-32 mb-6 bg-gray-300"></div>
//             <h3 className="text-2xl sm:text-3xl font-bold mb-4">Project 2</h3>
//             <p className="text-lg mb-4">Description of your second project goes here.</p>
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-full">Learn More</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectSection = ({ forwardedRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section ref={forwardedRef} className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-100 py-16">
      {/* Title Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* Scrolling Project Cards */}
      <div ref={ref} className="w-full overflow-hidden">
        <motion.div
          className="flex items-center space-x-8 md:space-x-12 px-8"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {/* Project Card 1 */}
          <motion.div
            whileHover={{ scale: 1.1, x: 0 }}
            className="flex-shrink-0 w-64 md:w-80 bg-white shadow-lg p-6 rounded-lg cursor-pointer"
          >
            <div className="w-32 h-32 mb-4 mx-auto">
              <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                whileHover={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
              >
                <rect width="200" height="200" fill="#E2E8F0" />
                <path d="M100 30 L160 170 L40 170 Z" fill="#805AD5" />
              </motion.svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">ChronoLog</h3>
            <p className="text-center text-gray-600 mb-4">Chronolog is your go-to app for productivity and personal reflection.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-full w-full"
            >
              Try ChronoLog
            </motion.button>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            whileHover={{ scale: 1.1, x: 0 }}
            className="flex-shrink-0 w-64 md:w-80 bg-white shadow-lg p-6 rounded-lg cursor-pointer"
          >
            <div className="w-32 h-32 mb-4 mx-auto bg-gray-300"></div>
            <h3 className="text-xl font-bold mb-2 text-center">Project 2</h3>
            <p className="text-center text-gray-600 mb-4">Description of your second project goes here.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-full w-full"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Add more project cards as needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;



