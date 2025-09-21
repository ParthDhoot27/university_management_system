// Purpose: Student controller with mock data for ERP-Lite API
const studentData = require('../data/studentData');

const studentController = {
  // Get student dashboard data
  getDashboard: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.dashboard,
        message: 'Student dashboard data retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve dashboard data',
        message: error.message
      });
    }
  },

  // Get student attendance data
  getAttendance: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.attendance,
        message: 'Attendance data retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve attendance data',
        message: error.message
      });
    }
  },

  // Get student timetable
  getTimetable: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.timetable,
        message: 'Timetable retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve timetable',
        message: error.message
      });
    }
  },

  // Get student exams and events
  getExams: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.exams,
        message: 'Exams and events retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve exams data',
        message: error.message
      });
    }
  },

  // Get student profile
  getProfile: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.profile,
        message: 'Profile data retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve profile data',
        message: error.message
      });
    }
  },

  // Get student grades
  getGrades: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.grades,
        message: 'Grades retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve grades',
        message: error.message
      });
    }
  },

  // Get student assignments
  getAssignments: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.assignments,
        message: 'Assignments retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve assignments',
        message: error.message
      });
    }
  },

  // Get student notifications
  getNotifications: (req, res) => {
    try {
      res.json({
        success: true,
        data: studentData.notifications,
        message: 'Notifications retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve notifications',
        message: error.message
      });
    }
  }
};

module.exports = studentController;

