import React from "react";

const HeroPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Welcome to <span className="text-yellow-400">learning with Sambira!</span>
          </h1>
          <p className="mt-4 text-lg lg:text-xl">
            Explore endless possibilities with our well curated courses.
            Empowering you to achieve more, dream bigger, and thrive in your
            career
          </p>
          <div className="mt-6 space-x-4">
            <a href="/login" className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500">
              Get Started
            </a>
            <button className="px-6 py-3 border border-white rounded-lg shadow-lg hover:bg-white hover:text-blue-900">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Illustration"
            className="w-4/5 lg:w-full max-w-lg transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
