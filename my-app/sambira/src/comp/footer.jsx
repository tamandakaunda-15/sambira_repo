import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Sambira Educational App is dedicated to empowering youth in rural
            Malawi with access to skills training and career development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="text-gray-400 hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/skills-training" className="text-gray-400 hover:text-white">
                Skills Training
              </a>
            </li>
            <li>
              <a href="/career-resources" className="text-gray-400 hover:text-white">
                Career Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="mb-4">Follow us on:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-blue-500 hover:text-blue-700"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-blue-400 hover:text-blue-600"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-blue-300 hover:text-blue-500"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-pink-500 hover:text-pink-700"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6">
        <p>&copy; {new Date().getFullYear()} Sambira Educational App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
