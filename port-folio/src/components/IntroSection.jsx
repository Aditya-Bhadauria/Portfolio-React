
// import React from 'react';
// import { ArrowDownIcon } from 'lucide-react';
// import Lottie from 'react-lottie';
// import animationData from '../assets/Animations/Desk-Animation.json';

// const IntroSection = ({ scrollToNextSection }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
//       <div className="w-full px-4 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 md:pl-8 lg:pl-16">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Hi, my name is <span className="text-purple-600">Aditya Bhadauria</span>.
//           </h1>
//           <p className="text-xl mb-8">I'm an indepenwhdent creative developer</p>
//           <button onClick={scrollToNextSection} className="text-purple-600 flex items-center">
//             <span className="mr-2">SCROLL</span>
//             <ArrowDownIcon size={24} />
//           </button>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//           <div className="w-64 h-64">
//             <Lottie options={defaultOptions} height={450} width={450} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroSection;


import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/Desk-Animation.json';

const IntroSection = ({ scrollToNextSection }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="w-full px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8 lg:pl-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, my name is <span className="text-purple-600">Aditya Bhadauria</span>.
          </h1>
          <p className="text-xl mb-8">I'm an independent creative developer</p>
          <button onClick={scrollToNextSection} className="text-purple-600 flex items-center">
            <span className="mr-2">SCROLL</span>
            <ArrowDownIcon size={24} />
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <div className="w-70 h-70 flex justify-center items-center">
            <Lottie options={defaultOptions} height={450} width={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

