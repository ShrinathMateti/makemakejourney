import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Tour Packages", href: "#tourpackages" },
    { name: "Car Rent", href: "#car-rent" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-5 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <FaPlane className="text-2xl text-slate-800" />
          <span className="text-xl font-bold text-slate-800">Make My Journey</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-5 md:p-0 bg-white md:bg-transparent">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-slate-700 font-medium hover:text-blue-700 hover:text-red-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
