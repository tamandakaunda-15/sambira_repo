const express = require("express");
const Course = require("../models/course");
const router = express.Router();

// Course Enrollment Route
router.post("/enroll", async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.students.push(userId); // Add student to the course
    await course.save();

    res.status(200).json({ message: "Enrollment successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Course Completion Route
router.post("/complete", async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!course.students.includes(userId)) {
      return res.status(400).json({ message: "User not enrolled in the course" });
    }

    course.completed.push(userId); // Mark the course as completed by the student
    await course.save();

    res.status(200).json({ message: "Course completed!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
