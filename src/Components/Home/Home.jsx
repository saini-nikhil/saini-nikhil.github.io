// import React from "react";
// import avatarImg from "../../assets/myavtr.jpg";
// import TextChange from "../TextChange";

// const Home = () => {
//   return (
//     <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-6 md:p-20 gap-6 md:gap-0">
//       {/* Text Section */}
//       <div className="md:w-2/4 md:pt-10 text-center md:text-left">
//         <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight mt-2 md:mt-4">
//           Full Stack Developer
//         </p>
//         <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Contact Me
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className="flex justify-center w-full md:w-auto">
//         <img
//           className="w-64 h-64 md:w-[500px] md:h-[500px] object-cover rounded-full border-4 border-white"
//           src={avatarImg}
//           alt="Avatar of the developer"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa";
import avatarImg from "../../assets/myavtr.jpg"; 
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-200" style={{ backgroundColor: "#171d32" }}>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-around py-16 px-4 max-w-7xl mx-auto">
        {/* Profile Picture */}
        <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-gray-700 shadow-lg mb-10 md:mb-0">
          <img 
            src={avatarImg} 
            alt="profile" 
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-300" 
          />
        </div>

        {/* Hero Text */}
        <div className="max-w-xl text-center md:text-left">
          <h5 className="text-lg text-gray-400">
            Hi, I'm <span className="text-blue-500"><TextChange /></span>
          </h5>
          <h1 className="text-4xl font-bold text-blue-500 my-4">Nikhil</h1>
          <p className="text-gray-400 mb-6">
            Passionate full-stack web developer with expertise in frontend technologies like HTML, CSS, JavaScript, React, and backend development. Focused on creating intuitive, responsive, and scalable web applications. Currently improving my backend skills and looking forward to new challenges.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a 
              href="#" 
              className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500"
            >
              Download CV
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-2xl hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-blue-500"><FaLinkedin /></a>
            <a href="#" className="text-2xl hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-blue-500"><FaGithub /></a>
            <a href="#" className="text-2xl hover:text-blue-500"><FaLink /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
