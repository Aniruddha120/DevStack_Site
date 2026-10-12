import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient text-lg font-extrabold text-white shadow-sm">
              DS
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  index === 0
                    ? "font-semibold text-pink-600"
                    : "font-medium text-gray-600 transition hover:text-gray-900"
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop auth */}
          <div className="hidden items-center gap-5 md:flex">
            <button className="font-medium text-gray-700 transition hover:text-gray-900">
              Sign In
            </button>
            <button className="rounded-full brand-gradient px-6 py-2.5 font-medium text-white shadow-sm transition hover:opacity-90">
              Sign Up
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="text-gray-700 md:hidden"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50 hover:text-pink-600"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button className="flex-1 rounded-full border border-gray-200 py-2.5 font-medium text-gray-700">
                Sign In
              </button>
              <button className="flex-1 rounded-full brand-gradient py-2.5 font-medium text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
