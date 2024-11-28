import React, { useState } from "react";

const groups = [
  { id: 1, name: "Digital Literacy", description: "Learn the basics of digital tools." },
  { id: 2, name: "Data Science", description: "Learn data analysis and machine learning." },
];

const CommunityForum = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [notification, setNotification] = useState("");
  const [comments, setComments] = useState({}); // Store comments by group

  const handleJoinGroup = (groupName) => {
    if (!joinedGroups.includes(groupName)) {
      setJoinedGroups((prev) => [...prev, groupName]);
      setNotification(`You have successfully joined the ${groupName} group!`);
    } else {
      setNotification(`You are already a member of the ${groupName} group.`);
    }
  };

  const handlePostComment = (groupId, comment) => {
    setComments((prev) => ({
      ...prev,
      [groupId]: [...(prev[groupId] || []), comment],
    }));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800">Community Forum</h2>
      <p className="text-gray-600 mt-2">Join discussions, connect with mentors, and share your experiences.</p>

      {notification && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          {notification}
        </div>
      )}

      <div className="mt-6">
        {groups.map((group) => (
          <div key={group.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <p className="text-gray-600">{group.description}</p>

            {/* Join Group Button */}
            <button
              onClick={() => handleJoinGroup(group.name)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Join {group.name} Group
            </button>

            {/* Discussion */}
            {joinedGroups.includes(group.name) && (
              <div className="mt-6">
                <h4 className="font-semibold">Group Discussion:</h4>
                <textarea
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Post a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value) {
                      handlePostComment(group.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
                <div className="mt-4">
                  <h5 className="font-semibold">Comments:</h5>
                  <ul>
                    {(comments[group.id] || []).map((comment, index) => (
                      <li key={index} className="mt-2 p-2 bg-gray-200 rounded-md">
                        {comment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
