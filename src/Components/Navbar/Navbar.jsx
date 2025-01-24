import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      flex flex-wrap justify-between items-center text-white 
      px-10 pt-6 md:px-20 fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${scrolled ? 'bg-[#171d32] shadow-lg py-4' : 'bg-transparent py-6'}
    `}>
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Menu Items */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed md:static left-0 right-0 top-20 bg-[#171d32] 
        md:bg-transparent md:flex gap-6 md:mx-0 py-6 md:py-0`}
      >
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#Home" className="hover:text-blue-500">Home</a>
        </li>
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#About" className="hover:text-blue-500">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#Experience" className="hover:text-blue-500">Skills</a>
        </li>
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#Projects" className="hover:text-blue-500">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#GitStats" className="hover:text-blue-500">GitStats</a>
        </li>
        <li className="text-md transition-all duration-300 p-3 md:p-0 text-center md:text-left">
          <a href="#Footer" className="hover:text-blue-500">Contact</a>
        </li>
      </ul>

      {/* Menu Icon */}
      {menuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden fixed right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden fixed right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;