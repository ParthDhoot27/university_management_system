const express = require('express');
const controller = require('../controllers/studentController');

const router = express.Router();

router.get('/dashboard', controller.getDashboard);
router.get('/attendance', controller.getAttendance);
router.get('/timetable', controller.getTimetable);
router.get('/exams', controller.getExams);
router.get('/profile', controller.getProfile);
router.get('/grades', controller.getGrades);
router.get('/assignments', controller.getAssignments);
router.get('/notifications', controller.getNotifications);

module.exports = router;


