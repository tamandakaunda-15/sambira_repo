import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Sambira</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`lg:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-600 lg:bg-transparent`}
        >
          <a href="/" className="block py-2 px-4 lg:inline-block hover:bg-blue-700">
            Home
          </a>
          <a href="aboutUs" className="block py-2 px-4 lg:inline-block hover:bg-blue-700">
            About
          </a>
          <a href="contact" className="block py-2 px-4 lg:inline-block hover:bg-blue-700">
            Contact
          </a>
          <a href="/courses" className="block py-2 px-4 lg:inline-block hover:bg-blue-700">
            Couurses
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
