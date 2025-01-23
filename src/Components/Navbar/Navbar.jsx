import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20">
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Menu Items */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-4 rounded-xl bg-opacity-30 md:bg-transparent md:static md:flex gap-6 md:mx-0`}
      >
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Experience">Experience</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Menu Icon */}
      {menuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
