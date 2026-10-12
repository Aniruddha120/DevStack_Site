import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
              DS
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-pink-500 font-semibold">Home</a>
            <a href="#technologies" className="text-gray-600 font-medium">Technologies</a>
            <a href="#projects" className="text-gray-600 font-medium">Projects</a>
            <a href="#about" className="text-gray-600 font-medium">About</a>
            <a href="#contact" className="text-gray-600 font-medium">Contact</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-gray-700 font-medium">Sign In</button>
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;