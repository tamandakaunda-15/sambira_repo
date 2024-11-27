import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './comp/navBar';
import Home from './page/Home';
import Couurses from './page/Couurses';
import LoginPage from './page/Login';
import LearnersDashboard from './page/learnDashboard';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Couurses/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<LearnersDashboard/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact
        />} />
      </Routes>
    </Router>
  );
}

export default App;
