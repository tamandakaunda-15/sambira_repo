import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    image: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis, visualization, and machine learning.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design user-centric interfaces with Figma and Adobe XD.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Digital Literacy",
    description: "Improve your digital skills for today's workplace.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Resume Building",
    description: "Create professional resumes to stand out in the job market.",
    image: "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "LinkedIn Profile Optimization",
    description: "Optimize your LinkedIn profile to attract recruiters.",
    image: "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D",
  },
];

const FavoriteCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState({});

  const handleEnroll = (courseId) => {
    setEnrolledCourses((prev) => ({
      ...prev,
      [courseId]: true,
    }));
  };

  const handleWatchChoice = (courseId, choice) => {
    alert(`You chose to ${choice} the ${courses.find((course) => course.id === courseId).title} course.`);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our <span className="text-blue-600">Favorite Courses</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                {enrolledCourses[course.id] ? (
                  <div>
                    <button
                      onClick={() => handleWatchChoice(course.id, "Watch Now")}
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Watch Now
                    </button>
                    <button
                      onClick={() => handleWatchChoice(course.id, "Watch Later")}
                      className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      Watch Later
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Enroll
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteCourses;
