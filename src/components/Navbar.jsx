import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-mounties font-bold text-brown"
            >
              SquareFoot.studio
            </NavLink>
          </div>

          {/* Right: Links */}
          <div className="hidden md:flex ml-auto space-x-16 font-manrope font-semibold text-brown">
            <NavLink
              to="/"
              className="relative group flex items-center cursor-pointer"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="relative group flex items-center"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="relative group flex items-center"
            >
              <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brown transform scale-0 group-hover:scale-100 transition-transform duration-200 -translate-x-4"></span>
              Contact
            </NavLink>
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
              className="text-2xl font-mounties font-bold text-brown flex-shrink-0"
              onClick={() => setIsOpen(false)}
            >
              SquareFoot.studio
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
              className="text-4xl font-marbley text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-4xl font-marbley text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="text-4xl font-marbley text-brown hover:text-gray-900 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
