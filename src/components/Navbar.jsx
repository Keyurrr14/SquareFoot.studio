import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSmoothScroll } from "../context/SmoothScrollContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { lenis } = useSmoothScroll();

  const handleContactClick = async (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (window.location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        const footer = document.querySelector('footer');
        if (footer) {
          lenis.scrollTo(footer, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }, 300);
    } else {
      const footer = document.querySelector('footer');
      if (footer) {
        lenis.scrollTo(footer, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 w-full z-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-4xl font-neutra font-bold text-brown"
            >
              squarefoot.studio
            </NavLink>
          </div>

          {/* Right: Links */}
          <div className="hidden md:flex ml-auto space-x-16 font-NeutraContent font-bold text-brown">
            <NavLink
              to="/"
              className="relative group flex items-center cursor-pointer text-xl"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="relative group flex items-center cursor-pointer text-xl"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Portfolio
            </NavLink>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="relative group flex items-center cursor-pointer text-xl"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brown">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-1000 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center h-16 px-4">
            <NavLink
              to="/"
              className="text-4xl font-neutra font-bold text-brown flex-shrink-0"
              onClick={() => setIsOpen(false)}
            >
              squarefoot.studio
            </NavLink>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-brown"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={`flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8 transition-all duration-1000 ${
              isOpen
                ? "opacity-100 translate-y-0 delay-300"
                : "opacity-0 -translate-y-10 delay-0"
            }`}
          >
            <NavLink
              to="/"
              className="text-4xl font-NeutraContent text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-4xl font-NeutraContent text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </NavLink>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-4xl font-NeutraContent text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
