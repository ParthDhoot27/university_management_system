const path = require('path');
const legacy = require(path.resolve('backend/data/adminData.js'));

module.exports = {
  getDashboard: (req, res) => res.json({ success: true, data: legacy.dashboard }),
  getUsers: (req, res) => res.json({ success: true, data: legacy.users }),
  getCourses: (req, res) => res.json({ success: true, data: legacy.courses }),
  getSettings: (req, res) => res.json({ success: true, data: legacy.settings }),
  addUser: (req, res) => res.json({ success: true, message: 'User added' }),
  updateUser: (req, res) => res.json({ success: true, message: 'User updated' }),
  deleteUser: (req, res) => res.json({ success: true, message: 'User deleted' }),
  addCourse: (req, res) => res.json({ success: true, message: 'Course added' }),
  updateCourse: (req, res) => res.json({ success: true, message: 'Course updated' }),
  deleteCourse: (req, res) => res.json({ success: true, message: 'Course deleted' }),
  getStats: (req, res) => res.json({ success: true, data: legacy.stats || {} }),
  getReports: (req, res) => res.json({ success: true, data: legacy.reports || [] }),
  updateSettings: (req, res) => res.json({ success: true, message: 'Settings updated' }),
};


