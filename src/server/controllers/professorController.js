const path = require('path');
const legacy = require(path.resolve('backend/data/professorData.js'));

module.exports = {
  getDashboard: (req, res) => res.json({ success: true, data: legacy.dashboard }),
  getClasses: (req, res) => res.json({ success: true, data: legacy.classes }),
  getAttendance: (req, res) => res.json({ success: true, data: legacy.attendance }),
  getAssignments: (req, res) => res.json({ success: true, data: legacy.assignments }),
  getProfile: (req, res) => res.json({ success: true, data: legacy.profile }),
  markAttendance: (req, res) => res.json({ success: true, message: 'Attendance marked' }),
  createAssignment: (req, res) => res.json({ success: true, message: 'Assignment created' }),
  getClassStudents: (req, res) => res.json({ success: true, data: legacy.students || [] }),
  getGrades: (req, res) => res.json({ success: true, data: legacy.grades }),
};


