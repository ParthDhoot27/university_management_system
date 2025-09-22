const express = require('express');
const controller = require('../controllers/adminController');

const router = express.Router();

router.get('/dashboard', controller.getDashboard);
router.get('/users', controller.getUsers);
router.get('/courses', controller.getCourses);
router.get('/settings', controller.getSettings);
router.post('/users/add', controller.addUser);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);
router.post('/courses/add', controller.addCourse);
router.put('/courses/:id', controller.updateCourse);
router.delete('/courses/:id', controller.deleteCourse);
router.get('/stats', controller.getStats);
router.get('/reports', controller.getReports);
router.post('/settings/update', controller.updateSettings);

module.exports = router;


