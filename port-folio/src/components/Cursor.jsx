// // Cursor.js
// import React, { useEffect, useState } from 'react';
// import Lottie  from 'lottie-react';
// import cursorAnimation from '../assets/Animations/BirdCursor.json';
// import styled from 'styled-components';

// const AnimatedCursor = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   pointer-events: none;
//   width: 100px; /* Adjust as needed */
//   height: 100px; /* Adjust as needed */
//   transform: translate(-50%, -50%);
//   z-index: 9999;
// `;

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <AnimatedCursor style={{ left: `${position.x}px`, top: `${position.y}px` }}>
//       <Lottie animationData={cursorAnimation} loop={true} />
//     </AnimatedCursor>
//   );
// };

// export default Cursor;


// Cursor.js
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import cursorAnimation from '../assets/Animations/BirdCursor.json';
import styled from 'styled-components';

const AnimatedCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100px; /* Adjust as needed */
  height: 100px; /* Adjust as needed */
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check screen width to determine if it's a desktop device
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDesktop]);

  // Do not render cursor on mobile/tablets
  if (!isDesktop) return null;

  return (
    <AnimatedCursor style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <Lottie animationData={cursorAnimation} loop={true} />
    </AnimatedCursor>
  );
};

export default Cursor;
