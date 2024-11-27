const skills = [
    {
      title: "Digital Literacy",
      description: "Learn essential digital skills to thrive in the modern world.",
    },
    {
      title: "Communication Skills",
      description: "Improve your verbal and written communication abilities.",
    },
    {
      title: "Personal Branding",
      description: "Build a strong personal brand for professional success.",
    },
  ];
  
  const SkillsTraining = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg">{skill.title}</h3>
            <p className="text-gray-600 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkillsTraining;
  