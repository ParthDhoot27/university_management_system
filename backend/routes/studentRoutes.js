// Purpose: Student-related API routes for ERP-Lite
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Student dashboard routes
router.get('/dashboard', studentController.getDashboard);
router.get('/attendance', studentController.getAttendance);
router.get('/timetable', studentController.getTimetable);
router.get('/exams', studentController.getExams);
router.get('/profile', studentController.getProfile);

// Student data routes
router.get('/grades', studentController.getGrades);
router.get('/assignments', studentController.getAssignments);
router.get('/notifications', studentController.getNotifications);

module.exports = router;

