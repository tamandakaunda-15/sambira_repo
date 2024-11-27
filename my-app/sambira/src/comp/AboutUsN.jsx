import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">Sambira</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Empowering rural Malawi through accessible education and career readiness.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            The Sambira Educational Web Application is dedicated to bridging the education gap in rural
            Malawi. Our mission is to provide young adults and recent graduates with access to essential
            skills training, career guidance, and a platform for networking, even in low-bandwidth areas.
          </p>
        </section>

        {/* Problem Statement Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Problem Statement</h2>
          <p className="text-gray-600 leading-relaxed">
            Rural areas in Malawi face challenges such as poor internet connectivity, lack of access to
            educational resources, and inadequate skills training. This results in many graduates struggling
            to secure jobs or pursue entrepreneurship.
          </p>
        </section>

        {/* Proposed Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proposed Solution</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Low-bandwidth optimization:</strong> Ensuring full functionality under 2G networks.
            </li>
            <li>
              <strong>Career development resources:</strong> Offering resume tips, job search strategies, and
              interview preparation.
            </li>
            <li>
              <strong>Skills training:</strong> Providing modules on digital literacy, communication, and personal
              branding.
            </li>
            <li>
              <strong>Community networking:</strong> Forums for interaction with peers, mentors, and industry leaders.
            </li>
            <li>
              <strong>Mentorship:</strong> Onboarding educators to guide and track student progress.
            </li>
          </ul>
        </section>

        {/* Outcomes Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Outcomes</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Register over 5,000 rural graduates within the first year, with 70% reporting improved access to
              learning resources.
            </li>
            <li>
              Enhance job prospects, with a 20% increase in job placements among active users.
            </li>
            <li>
              Strengthen community engagement, maintaining 80% user retention in forums within the first 6 months.
            </li>
            <li>
              Bridge the education gap by empowering youth with career readiness tools and training.
            </li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Join us in transforming education access in Malawi and beyond!
          </p>
          <a
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
