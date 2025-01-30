
import React from "react";
import AboutImg from "../../assets/image12.webp";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="p-10 md:p-24">

   
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gray-900 l mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
      <h1 className="text-3xl font-bold text-center mb-6">About</h1>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-90" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-4 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in creating visually appealing and responsive web
                  interfaces. My expertise includes HTML, CSS, JavaScript, and
                  modern frameworks like React.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a solid understanding of database design and management,
                  including relational databases like MySQL and NoSQL databases like MongoDB.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer in Progress
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Currently, I am expanding my skillset in backend development.
                  I am learning to build efficient and secure APIs and services using technologies like Node.js and Express.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
