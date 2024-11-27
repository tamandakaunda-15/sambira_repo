const express = require('express');
const jwt = require('jsonwebtoken');
const Course = require('../models/course');
const User = require('../models/user');
const router = express.Router();

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Enroll in a course
router.post('/enroll/:id', authenticate, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        const user = await User.findById(req.user.id);

        if (!user.enrolledCourses.includes(course._id)) {
            user.enrolledCourses.push(course._id);
            await user.save();
        }

        res.json({ message: 'Enrolled successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Mark as complete
router.post('/complete/:id', authenticate, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course.completedBy.includes(req.user.id)) {
            course.completedBy.push(req.user.id);
            await course.save();
        }
        res.json({ message: 'Course marked as completed!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
