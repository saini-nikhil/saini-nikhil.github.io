import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaLink,
} from "react-icons/fa";
// import avatarImg from "../../assets/myavtr.jpg";
import avatarImg from "../../assets/passport.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div
      id="Home"
      className="min-h-screen flex items-center justify-center text-gray-200 bg-[#171d32]"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 max-w-7xl mx-auto">
        {/* Profile Picture */}
        <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-gray-700 shadow-lg mb-10 md:mb-0 md:mr-16">
          <img
            src={avatarImg}
            alt="profile"
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
          />
        </div>

        {/* Hero Text */}
        <div className="max-w-xl text-center md:text-left">
          <h5 className="text-lg text-gray-400">
            Hi, I'm{" "}
            <span className="text-blue-500">
              <TextChange />
            </span>
          </h5>
          <h1 className="text-4xl font-bold text-blue-500 my-4">Nikhil</h1>
          <p className="text-gray-400 mb-6">
            Passionate full-stack web developer with expertise in frontend
            technologies like HTML, CSS, JavaScript, React, and backend
            development. Focused on creating intuitive, responsive, and scalable
            web applications. Currently improving my backend skills and looking
            forward to new challenges.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a
              href="#"
              className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500"
            >
              Download CV
            </a>
            <a
              href="#Footer"
              className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilsaini0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaInstagram />
            </a>
            <a
              href="https://github.com/saini-nikhil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500"
            >
              <FaGithub />
            </a>
       
            <a
              href="mailto:1nikhilsaini234@gmail.com"
              className="text-2xl hover:text-blue-500"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
