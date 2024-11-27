import React, { useState } from 'react';
import { Briefcase, CheckCircle, XCircle } from 'lucide-react'; // Lucide icons

const careerOpportunities = [
  {
    id: 1,
    title: 'Digital Marketing Specialist',
    company: 'Tech Innovations Ltd.',
    applicationDeadline: '2024-12-10',
    description: 'We are looking for a passionate digital marketer to join our team and help expand our digital presence.',
    applied: false
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Dev Solutions Co.',
    applicationDeadline: '2024-12-15',
    description: 'Seeking a frontend developer skilled in React and web development to work on exciting client projects.',
    applied: false
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Design Masters',
    applicationDeadline: '2024-12-20',
    description: 'We need a creative designer to help improve user interfaces for web and mobile applications.',
    applied: true
  },
  {
    id: 4,
    title: 'Entrepreneurship Internship',
    company: 'Startup Ventures',
    applicationDeadline: '2024-12-25',
    description: 'An exciting opportunity for young entrepreneurs to join a fast-growing startup and gain valuable business experience.',
    applied: false
  }
];

const Careers = () => {
  const [careerData, setCareerData] = useState(careerOpportunities);

  // Handle Marking Application Status
  const handleMarkInterested = (id) => {
    const updatedCareers = careerData.map((career) =>
      career.id === id ? { ...career, applied: !career.applied } : career
    );
    setCareerData(updatedCareers);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Career Opportunities</h2>

      <div className="space-y-6">
        {careerData.map((career) => (
          <div
            key={career.id}
            className={`border p-4 rounded-lg shadow-md ${career.applied ? 'bg-green-100' : 'bg-gray-100'}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
              <p className="text-sm text-gray-600">{career.company}</p>
            </div>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Deadline:</span> {career.applicationDeadline}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Description:</span> {career.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => handleMarkInterested(career.id)}
                className={`px-4 py-2 rounded-lg ${career.applied ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'} hover:bg-opacity-90 transition duration-300`}
              >
                {career.applied ? (
                  <>
                    <CheckCircle className="mr-2" size={18} />
                    Applied
                  </>
                ) : (
                  <>
                    <XCircle className="mr-2" size={18} />
                    Mark as Interested
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
