// Purpose: Professor-related API routes for ERP-Lite
const express = require('express');
const professorController = require('../controllers/professorController');

const router = express.Router();

// Professor dashboard routes
router.get('/dashboard', professorController.getDashboard);
router.get('/classes', professorController.getClasses);
router.get('/attendance', professorController.getAttendance);
router.get('/assignments', professorController.getAssignments);
router.get('/profile', professorController.getProfile);

// Professor management routes
router.post('/attendance/mark', professorController.markAttendance);
router.post('/assignments/create', professorController.createAssignment);
router.get('/students/:classId', professorController.getClassStudents);
router.get('/grades', professorController.getGrades);

module.exports = router;

