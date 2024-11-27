import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Lucide icons

const assignments = [
  { id: 1, title: "Introduction to Digital Marketing", dueDate: "2024-12-01", description: "Complete the digital marketing module and submit the quiz.", completed: false },
  { id: 2, title: "Advanced JavaScript", dueDate: "2024-12-05", description: "Submit the final project with JavaScript and API integration.", completed: false },
  { id: 3, title: "UI/UX Design Prototype", dueDate: "2024-12-10", description: "Create a high-fidelity prototype of your website using Figma.", completed: false },
  { id: 4, title: "Entrepreneurship Case Study", dueDate: "2024-12-15", description: "Write a case study based on your entrepreneurial experiences.", completed: true },
];

const Assignments = () => {
  const [assignmentData, setAssignmentData] = useState(assignments);

  const handleMarkCompleted = (id) => {
    const updatedAssignments = assignmentData.map((assignment) =>
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
    );
    setAssignmentData(updatedAssignments);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Assignments</h2>

      <div className="space-y-6">
        {assignmentData.map((assignment) => (
          <div
            key={assignment.id}
            className={`border p-4 rounded-lg shadow-md ${assignment.completed ? "bg-green-100" : "bg-gray-100"}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
              <p className="text-sm text-gray-600">{assignment.dueDate}</p>
            </div>
            <p className="text-gray-600 mt-2">{assignment.description}</p>
            
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => handleMarkCompleted(assignment.id)}
                className={`px-4 py-2 rounded-lg ${assignment.completed ? "bg-green-600 text-white" : "bg-yellow-600 text-white"} hover:bg-opacity-90 transition duration-300`}
              >
                {assignment.completed ? (
                  <>
                    <CheckCircle className="mr-2" size={18} />
                    Completed
                  </>
                ) : (
                  <>
                    <XCircle className="mr-2" size={18} />
                    Mark as Completed
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

export default Assignments;
