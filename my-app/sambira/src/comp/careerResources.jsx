import React, { useState } from 'react';

const CareerResources = () => {
  const [activeResource, setActiveResource] = useState(null);

  const resources = [
    {
      title: "Resume Building Tips",
      content: "Learn how to craft a compelling resume with tips on formatting, tailoring for job applications, and highlighting your accomplishments.",
    },
    {
      title: "Job Search Strategies",
      content: "Discover effective strategies for job searching, including networking, using job boards, and optimizing your LinkedIn profile.",
    },
    {
      title: "Interview Preparation Guides",
      content: "Prepare for interviews with our comprehensive guides on common questions, behavioral techniques, and how to make a great impression.",
    },
    {
      title: "Entrepreneurship Essentials",
      content: "Explore the fundamentals of starting and managing your own business, from ideation to scaling up.",
    },
  ];

  const toggleContent = (index) => {
    setActiveResource(index === activeResource ? null : index);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-600">Career Development Resources</h2>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        {resources.map((resource, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => toggleContent(index)}
              className="text-blue-600 hover:underline focus:outline-none"
            >
              {resource.title}
            </button>
            {activeResource === index && (
              <div className="mt-2 text-sm text-gray-600">
                {resource.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerResources;
