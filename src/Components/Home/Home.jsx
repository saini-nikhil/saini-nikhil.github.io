import React from "react";
// import avatarImg from "../../assets/image11.webp";
import avatarImg from "../../assets/myavtr.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          full Stack developer
        </p>
        <button className=" mt-5 md:md-10 text-white py2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        
      </div>
      <div>
        {/* <img className="border-radius: var(--radius-3xl) h-64 md:h-[500px] object-cover" src={avatarImg} alt="avatar" />
         */}
         {/* <img
  className="h-64 md:h-[500px] w-64 md:w-[400px] object-cover rounded-[50%]"
  src={avatarImg}
  alt="avatar"
/> */}
<img
  className="h-64 md:h-[500px] object-cover rounded-full"
  src={avatarImg}
  alt="avatar"
/>

      </div>
    </div>
  );
};

export default Home;
