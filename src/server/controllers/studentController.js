// Proxy to existing mock data and structure from backend/data if needed
const path = require('path');
const legacy = require(path.resolve('backend/data/studentData.js'));

module.exports = {
  getDashboard: (req, res) => {
    res.json({ success: true, data: legacy.dashboard });
  },
  getAttendance: (req, res) => {
    res.json({ success: true, data: legacy.attendance });
  },
  getTimetable: (req, res) => {
    res.json({ success: true, data: legacy.timetable });
  },
  getExams: (req, res) => {
    res.json({ success: true, data: legacy.exams });
  },
  getProfile: (req, res) => {
    res.json({ success: true, data: legacy.profile });
  },
  getGrades: (req, res) => {
    res.json({ success: true, data: legacy.grades });
  },
  getAssignments: (req, res) => {
    res.json({ success: true, data: legacy.assignments });
  },
  getNotifications: (req, res) => {
    res.json({ success: true, data: legacy.notifications });
  },
};


