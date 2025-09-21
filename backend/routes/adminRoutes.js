// Purpose: Admin-related API routes for ERP-Lite
const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Admin dashboard routes
router.get('/dashboard', adminController.getDashboard);
router.get('/users', adminController.getUsers);
router.get('/courses', adminController.getCourses);
router.get('/settings', adminController.getSettings);

// User management routes
router.post('/users/add', adminController.addUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Course management routes
router.post('/courses/add', adminController.addCourse);
router.put('/courses/:id', adminController.updateCourse);
router.delete('/courses/:id', adminController.deleteCourse);

// System management routes
router.get('/stats', adminController.getStats);
router.get('/reports', adminController.getReports);
router.post('/settings/update', adminController.updateSettings);

module.exports = router;

