const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Importing routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

// Using routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Define a route for the root URL (optional for testing)
app.get('/', (req, res) => {
  res.send('Backend server is running');  // Response when visiting the root URL
});

// Start the server and connect to the database
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
