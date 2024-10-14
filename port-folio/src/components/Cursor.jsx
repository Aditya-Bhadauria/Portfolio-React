// Cursor.js
// import React, { useEffect, useState } from 'react';
// import { Lottie } from 'lottie-react';
// import cursorAnimation from '../assets/Animations/BirdCursor.json';
// import styled from 'styled-components';

// const AnimatedCursor = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   pointer-events: none;
//   width: 50px; /* Adjust as needed */
//   height: 50px; /* Adjust as needed */
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
