import {FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-800 py-8 ">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-slate-800">Make My Journey</h2>
          <p className="text-sm text-slate-800 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-slate-800 mt-1">
            Designed By Shrinath Mateti
          </p>
        </div>

        <ul className="flex space-x-6 text-sm font-bold">
          <li><a href="/#" className="hover:text-red-700 transition">Home</a></li>
          <li><a href="#about" className="hover:text-red-700 transition">About</a></li>
          <li><a href="#tourpackages" className="hover:text-red-700 transition">Tour Packages</a></li>
          <li><a href="#contact" className="hover:text-red-700 transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="/" className="hover:text-red-700 transition"><FaFacebookF /></a>
          <a href="/" className="hover:text-red-700 transition"><FaTwitter /></a>
          <a href="/" className="hover:text-red-700 transition"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
