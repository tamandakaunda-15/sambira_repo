Sambira Educational Web Application

Project Overview
Sambira Educational Web Application is a low-bandwidth platform designed to bridge the educational gap in rural Malawi. The app offers career readiness tools, mentorship, soft skills training, and a community forum. It's optimized to work in low-internet environments and is built with React and Vite to ensure fast development and quick loading times.


Key Features
User Authentication: Secure login and registration system.
Learner Dashboard: Track learning progress, manage assignments (mark as Complete or Incomplete).

Course Modules: Access career development resources like soft skills training, resume-building, and entrepreneurship guides.

Mentorship Booking: Connect with mentors or industry professionals for personalized guidance.

Community Forum: Discuss career challenges and share knowledge with peers and mentors.

Profile Management: Users can update their personal details and preferences.

Low-Bandwidth Optimization: The app is designed to work smoothly on 2G and 3G networks.


Technology Stack
Frontend: React.js, Vite
Backend:  Node.js/Express 
Database: MongoDB
Deployment: Vercel
Authentication: JWT


Installation and Setup

Prerequisites
Ensure the following are installed on your machine:
Node.js (v14 or above)
Git
Vite (used for quick project setup)



1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/sambira_repo.git
cd sambira_repo

3. Install Dependencies
Install the required dependencies for the project:
npm install


3. Start the Development Server
Once the dependencies are installed, you can start the development server:
npm run dev
This will start the app at http://localhost:5173 (the port specified by Vite).


4. Accessing the Application
Open your browser and navigate to http://localhost:5173 to see the app running locally.


Features and Functionality
1. User Authentication
Users can sign up or log in to access their personalized dashboard.
Passwords are securely stored and managed.


3. Learner Dashboard
Track progress through courses and training modules.
Mark assignments as "complete" or "incomplete".

5. Mentorship Booking
Users can book one-on-one mentorship sessions with facilitators and industry professionals.

7. Community Forum
A discussion board for users to share ideas, ask questions, and get guidance from mentors and peers.

Deployment
Vercel Deployment
Sign up for Vercel at Vercel.com.
Link your GitHub repository to Vercel.
Select the branch you want to deploy (usually main).
Deploy the app and get a public URL.
Netlify Deployment (Alternative)
Sign up for Netlify at Netlify.com.
Link your GitHub repository to Netlify.
Select the main branch to deploy.
Click Deploy and get a live URL.
Environment Variables
For your app to work with different environments, you may need to set up the following environment variables in your .env file (add any other environment-specific variables):

plaintext
VITE_API_URL=https://your-api-url.com
VITE_SECRET_KEY=your-secret-key
Testing
To run tests for your React app (if using testing frameworks like Jest or React Testing Library):
npm test


Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Added new feature').
Push to the branch (git push origin feature-name).
Open a pull request to the main repository.



License
This project is licensed under the MIT License.


Contact
For any issues, questions, or feedback, feel free to reach out to:
Email: tamandakaunda900@gmail.com
GitHub: tamandakauunda-15
