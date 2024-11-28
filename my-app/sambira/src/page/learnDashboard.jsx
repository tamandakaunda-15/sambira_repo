import React, { useState, useEffect } from 'react';
import { 
  Book, 
  Users, 
  Briefcase, 
  LogOut, 
  Star, 
  Award, 
  FileText, 
  Video,
  X,
  Download,
  ClipboardList,
  CheckCircle,
  BarChart2,
  Settings,
  Bell,
  Search,
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FindMentors from '../comp/Mentor';
import Assignments from '../comp/Asses';
import Careers from '../comp/Careers';
import CareerResources from '../comp/careerResources';
import ProfileView from '../comp/Profile';

const SambiraDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState({
    name: 'Tamanda Kaunda',
    email: 'tamanda@sambira.com',
    avatar: 'https://www.dropbox.com/scl/fi/rrg7h7ogr0kebev0004fa/Purple-and-Green-Simple-Woman-Instagram-Profile-Picture-4.png?rlkey=6ec9uz4z6qxqpa1o50iczfr80&st=uwz5v1jb&dl=0',
    learningPath: 'Full Stack Web Development'
  });

  // Comprehensive Course Data
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      instructor: 'John Smith',
      progress: 65,
      level: 'Intermediate',
      description: 'Comprehensive web development course covering full-stack technologies',
      modules: [
        'Frontend Fundamentals',
        'Backend Development',
        'Database Integration',
        'Deployment Strategies'
      ],
      certificate: false
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Emma Johnson',
      progress: 30,
      level: 'Beginner',
      description: 'Introduction to data science and machine learning',
      modules: [
        'Python Programming',
        'Statistical Analysis',
        'Machine Learning Basics',
        'Data Visualization'
      ],
      certificate: false
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Sarah Tech',
      expertise: 'Software Engineering',
      rating: 4.8,
      available: true,
      bio: 'Senior Software Engineer with 8 years of experience in full-stack development',
      specialty: 'Web Technologies, Agile Methodologies',
      hourlyRate: 75
    },
    {
      id: 2,
      name: 'Michael Data',
      expertise: 'Data Analytics',
      rating: 4.9,
      available: true,
      bio: 'Data Scientist with expertise in machine learning and big data solutions',
      specialty: 'Machine Learning, Data Visualization',
      hourlyRate: 85
    }
  ];

  const assessments = [
    {
      id: 1,
      title: 'Web Development Midterm',
      course: 'Web Development Bootcamp',
      date: '2024-03-15',
      grade: 85,
      maxGrade: 100,
      passed: true,
      type: 'Practical Exam'
    },
    {
      id: 2,
      title: 'Data Science Quiz',
      course: 'Data Science Fundamentals',
      date: '2024-02-20',
      grade: 72,
      maxGrade: 100,
      passed: true,
      type: 'Multiple Choice'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Course Available',
      message: 'Advanced React.js course is now open for enrollment',
      date: '2024-04-15',
      type: 'course'
    },
    {
      id: 2,
      title: 'Mentor Session Reminder',
      message: 'Your mentorship session with Sarah Tech is tomorrow at 2 PM',
      date: '2024-04-16',
      type: 'mentor'
    }
  ];

  const careerResources = [
    {
      id: 1,
      title: 'Tech Interview Preparation Guide',
      type: 'PDF Guide',
      description: 'Comprehensive guide for tech interview success',
      topics: [
        'Algorithm Problem Solving',
        'System Design',
        'Behavioral Interview Tips'
      ]
    },
    {
      id: 2,
      title: 'Resume Building Masterclass',
      type: 'Video Course',
      description: 'Step-by-step guide to creating a standout tech resume',
      topics: [
        'Resume Structure',
        'Highlighting Technical Skills',
        'Portfolio Development'
      ]
    }
  ];

  const DashboardOverview = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <Book className="text-blue-500 w-12 h-12" />
            <span className="text-2xl font-bold text-blue-700">{courses.length}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Active Courses</h3>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <ClipboardList className="text-green-500 w-12 h-12" />
            <span className="text-2xl font-bold text-green-700">{assessments.length}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Completed Assessments</h3>
          <p className="text-gray-600">Track your academic progress</p>
        </div>

        <div className="bg-purple-100 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <Users className="text-purple-500 w-12 h-12" />
            <span className="text-2xl font-bold text-purple-700">{mentors.length}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Available Mentors</h3>
          <p className="text-gray-600">Get expert guidance</p>
        </div>
      </div>
    );
  };

  const ProfileSection = () => {
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState(user);

    const handleSaveProfile = () => {
      setUser(profileData);
      setEditMode(false);
    };

    return (
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="flex items-center space-x-6">
          <img 
            src={profileData.avatar} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            {!editMode ? (
              <>
                <h2 className="text-2xl font-bold">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.email}</p>
                <p className="text-blue-500">{profileData.learningPath}</p>
              </>
            ) : (
              <div className="space-y-3">
                <input 
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full border p-2 rounded"
                  placeholder="Full Name"
                />
                <input 
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full border p-2 rounded"
                  placeholder="Email"
                />
              </div>
            )}
          </div>
          <button 
            onClick={() => setEditMode(!editMode)}
            className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
          {editMode && (
            <button 
              onClick={handleSaveProfile}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          )}
        </div>
      </div>
    );
  };

  const NotificationsSection = () => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Bell className="mr-3 text-blue-500" /> Notifications
        </h2>
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="border-b py-3 hover:bg-gray-50 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-gray-600 text-sm">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.date}</span>
              </div>
              <div 
                className={`
                  px-3 py-1 rounded-full text-xs
                  ${notification.type === 'course' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}
                `}
              >
                {notification.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-500">Sambira</h1>
          <p className="text-gray-600">Learning Platform</p>
        </div>
        
        <nav className="space-y-2">
          {[
            { name: 'dashboard', icon: <BarChart2 className="mr-3" />, label: 'Dashboard' },
            { name: 'courses', icon: <Book className="mr-3" />, label: 'My Courses' },
            { name: 'mentors', icon: <Users className="mr-3" />, label: 'Find Mentors' },
            { name: 'assessments', icon: <ClipboardList className="mr-3" />, label: 'Assessments' },
            { name: 'career', icon: <Briefcase className="mr-3" />, label: 'Career Resources' },
            { name: 'profile', icon: <User className="mr-3" />, label: 'Profile' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`w-full flex items-center p-3 rounded-lg ${
                activeSection === item.name 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-3 rounded-lg text-red-600 hover:bg-red-100"
          >
            <LogOut className="mr-3" /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="space-y-8">
          {activeSection === 'dashboard' && (
            <>
              <ProfileSection />
              <DashboardOverview />
              <div className="grid md:grid-cols-2 gap-6">
                <NotificationsSection />
                {/* Additional widgets can be added here */}
              </div>
            </>
          )}

          {activeSection === 'courses' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Book className="mr-3 text-blue-500" /> My Courses
              </h2>
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="flex items-center border-b py-4 hover:bg-gray-50 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-gray-600">{course.instructor}</p>
                    <p className="text-sm text-gray-500 mt-2">{course.description}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-4">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{width: `${course.progress}%`}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        {activeSection === "mentors"&&(
            <FindMentors/>
        )}
        {activeSection === "assessments"&&(
            <Assignments/>
        )}
        {activeSection === "career"&&(
            <CareerResources/>
        )}
                {activeSection === "profile"&&(
            <ProfileView/>
        )}
        
          {/* Other sections (mentors, assessments, career resources) would be similarly implemented */}
        </div>
      </div>
    </div>
  );
};

export default SambiraDashboard;