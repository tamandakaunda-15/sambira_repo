import React, { useState } from "react";
import { User, MessageCircle, Calendar } from "lucide-react"; // Lucide icons

const mentors = [
  { id: 1, name: "John Doe", expertise: "Digital Marketing", availability: "Mon, Wed, Fri", sessions: 10 },
  { id: 2, name: "Jane Smith", expertise: "Software Engineering", availability: "Tue, Thu", sessions: 5 },
  { id: 3, name: "Emily Johnson", expertise: "Entrepreneurship", availability: "Mon, Fri", sessions: 7 },
  { id: 4, name: "Michael Brown", expertise: "UI/UX Design", availability: "Mon, Thu, Sat", sessions: 3 },
];

const FindMentors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({ date: "", time: "", reason: "" });
  const [savedSessions, setSavedSessions] = useState([]);
  const [message, setMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  // Handle opening the session booking modal
  const handleBookSession = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  // Handle opening the message modal
  const handleMessageMentor = (mentor) => {
    setSelectedMentor(mentor);
    setIsMessageModalOpen(true);
  };

  // Handle closing the modals
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsMessageModalOpen(false);
    setBookingDetails({ date: "", time: "", reason: "" });
    setMessage("");
  };

  // Handle booking form input changes
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Handle booking submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const session = { ...bookingDetails, mentor: selectedMentor };
    setSavedSessions((prevSessions) => [...prevSessions, session]);

    // Notify the user
    alert(`Session successfully booked with ${selectedMentor.name}!`);
    handleCloseModal();
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(`Message to ${selectedMentor.name}: ${message}`);

    // Notify the user
    alert(`Message successfully sent to ${selectedMentor.name}`);
    handleCloseModal();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find a Mentor</h2>

      {/* Mentors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="flex items-center">
              <User className="text-blue-600 mr-2" size={24} />
              <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
            </div>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Expertise:</span> {mentor.expertise}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Available:</span> {mentor.availability}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Sessions Available:</span> {mentor.sessions}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => handleMessageMentor(mentor)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <MessageCircle className="mr-2" size={18} />
                Message
              </button>
              <button
                onClick={() => handleBookSession(mentor)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                <Calendar className="mr-2" size={18} />
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Booking Session */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Session with {selectedMentor?.name}</h3>
            <form onSubmit={handleBookingSubmit}>
              {/* Date */}
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Time */}
              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={bookingDetails.time}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Reason */}
              <div className="mb-4">
                <label htmlFor="reason" className="block text-gray-700">Reason for the Session</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={bookingDetails.reason}
                  onChange={handleBookingChange}
                  rows="3"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Book Session
                </button>
              </div>
            </form>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal for Messaging */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Message {selectedMentor?.name}</h3>
            <form onSubmit={handleSendMessage}>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMentors;
