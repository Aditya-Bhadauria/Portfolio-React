
// import React from 'react';
// import { MessageCircleIcon, Github, Linkedin } from 'lucide-react';

// const NavigationBar = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-purple-600 flex items-center space-x-2">
//           <a 
//             href="https://github.com/Aditya-Bhadauria" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             title="Visit my GitHub"
//           >
//             <Github size={24} />
//           </a>
//           <span className="mx-1">|</span>
//           <a 
//             href="https://linkedin.com/in/adityabhadauria" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             title="Visit my LinkedIn"
//           >
//             <Linkedin size={24} />
//           </a>
//         </div>
//         <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
//           <MessageCircleIcon size={18} />
//           <span className="ml-2">HIRE ME</span>
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default NavigationBar;




// transparent version
import React from 'react';
import { MessageCircleIcon, Github, Linkedin } from 'lucide-react';

const NavigationBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* <div className="text-purple-600 flex items-center space-x-2">
          <a 
            href="https://github.com/Aditya-Bhadauria" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Visit my GitHub"
          >
            <Github size={24} />
          </a>
          <span className="mx-1">|</span>
          <a 
            href="https://linkedin.com/in/adityabhadauria" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Visit my LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div> */}
        {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
          <MessageCircleIcon size={18} />
          <span className="ml-2">HIRE ME</span>
        </button> */}
      </nav>
    </header>
  );
};

export default NavigationBar;





