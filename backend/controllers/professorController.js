// Purpose: Professor controller with mock data for ERP-Lite API
const professorData = require('../data/professorData');

const professorController = {
  // Get professor dashboard data
  getDashboard: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.dashboard,
        message: 'Professor dashboard data retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve dashboard data',
        message: error.message
      });
    }
  },

  // Get professor classes
  getClasses: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.classes,
        message: 'Classes retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve classes',
        message: error.message
      });
    }
  },

  // Get professor attendance data
  getAttendance: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.attendance,
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

  // Get professor assignments
  getAssignments: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.assignments,
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

  // Get professor profile
  getProfile: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.profile,
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

  // Mark attendance
  markAttendance: (req, res) => {
    try {
      const { classId, students } = req.body;
      
      // Mock attendance marking
      res.json({
        success: true,
        data: {
          classId,
          markedStudents: students.length,
          timestamp: new Date().toISOString()
        },
        message: 'Attendance marked successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to mark attendance',
        message: error.message
      });
    }
  },

  // Create assignment
  createAssignment: (req, res) => {
    try {
      const { title, description, dueDate, classId } = req.body;
      
      // Mock assignment creation
      res.json({
        success: true,
        data: {
          id: Date.now(),
          title,
          description,
          dueDate,
          classId,
          createdAt: new Date().toISOString()
        },
        message: 'Assignment created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to create assignment',
        message: error.message
      });
    }
  },

  // Get class students
  getClassStudents: (req, res) => {
    try {
      const { classId } = req.params;
      
      res.json({
        success: true,
        data: professorData.students.filter(s => s.classId === classId),
        message: 'Class students retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve class students',
        message: error.message
      });
    }
  },

  // Get grades
  getGrades: (req, res) => {
    try {
      res.json({
        success: true,
        data: professorData.grades,
        message: 'Grades retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve grades',
        message: error.message
      });
    }
  }
};

module.exports = professorController;

