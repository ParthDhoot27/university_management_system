const express = require('express');
const controller = require('../../controllers/professorController');

const router = express.Router();

router.get('/dashboard', controller.getDashboard);
router.get('/classes', controller.getClasses);
router.get('/attendance', controller.getAttendance);
router.get('/assignments', controller.getAssignments);
router.get('/profile', controller.getProfile);
router.post('/attendance/mark', controller.markAttendance);
router.post('/assignments/create', controller.createAssignment);
router.get('/students/:classId', controller.getClassStudents);
router.get('/grades', controller.getGrades);

module.exports = router;


