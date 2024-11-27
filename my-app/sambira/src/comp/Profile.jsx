import React, { useState } from "react";
import { Camera } from "lucide-react"; // Lucide icon for profile picture

const ProfileView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate learner and aspiring digital marketer.",
    profilePic: "https://via.placeholder.com/150",
    contact: "+1234567890",
    education: "Bachelors in Business Administration",
    skills: ["Digital Marketing", "SEO", "Content Strategy"],
  });

  // Handle profile field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>

      {/* Profile Picture Section */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          {isEditing && (
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer"
            >
              <Camera size={18} />
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
            </label>
          )}
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Bio</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{profile.bio}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Contact Number</label>
          {isEditing ? (
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{profile.contact}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Education</label>
          {isEditing ? (
            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{profile.education}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Skills</label>
          {isEditing ? (
            <input
              type="text"
              name="skills"
              value={profile.skills.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "skills", value: e.target.value.split(", ") },
                })
              }
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{profile.skills.join(", ")}</p>
          )}
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-6 text-right">
        <button
          onClick={toggleEditMode}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
