// Purpose: Admin controller with mock data for ERP-Lite API
const adminData = require('../data/adminData');

const adminController = {
  // Get admin dashboard data
  getDashboard: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.dashboard,
        message: 'Admin dashboard data retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve dashboard data',
        message: error.message
      });
    }
  },

  // Get all users
  getUsers: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.users,
        message: 'Users retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve users',
        message: error.message
      });
    }
  },

  // Get all courses
  getCourses: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.courses,
        message: 'Courses retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve courses',
        message: error.message
      });
    }
  },

  // Get system settings
  getSettings: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.settings,
        message: 'Settings retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve settings',
        message: error.message
      });
    }
  },

  // Add new user
  addUser: (req, res) => {
    try {
      const { name, email, role, department } = req.body;
      
      // Mock user creation
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
        department,
        createdAt: new Date().toISOString(),
        status: 'active'
      };
      
      res.json({
        success: true,
        data: newUser,
        message: 'User added successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to add user',
        message: error.message
      });
    }
  },

  // Update user
  updateUser: (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      // Mock user update
      res.json({
        success: true,
        data: {
          id: parseInt(id),
          ...updateData,
          updatedAt: new Date().toISOString()
        },
        message: 'User updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to update user',
        message: error.message
      });
    }
  },

  // Delete user
  deleteUser: (req, res) => {
    try {
      const { id } = req.params;
      
      // Mock user deletion
      res.json({
        success: true,
        data: { id: parseInt(id) },
        message: 'User deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to delete user',
        message: error.message
      });
    }
  },

  // Add new course
  addCourse: (req, res) => {
    try {
      const { name, code, credits, department } = req.body;
      
      // Mock course creation
      const newCourse = {
        id: Date.now(),
        name,
        code,
        credits,
        department,
        createdAt: new Date().toISOString(),
        status: 'active'
      };
      
      res.json({
        success: true,
        data: newCourse,
        message: 'Course added successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to add course',
        message: error.message
      });
    }
  },

  // Update course
  updateCourse: (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      // Mock course update
      res.json({
        success: true,
        data: {
          id: parseInt(id),
          ...updateData,
          updatedAt: new Date().toISOString()
        },
        message: 'Course updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to update course',
        message: error.message
      });
    }
  },

  // Delete course
  deleteCourse: (req, res) => {
    try {
      const { id } = req.params;
      
      // Mock course deletion
      res.json({
        success: true,
        data: { id: parseInt(id) },
        message: 'Course deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to delete course',
        message: error.message
      });
    }
  },

  // Get system statistics
  getStats: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.stats,
        message: 'Statistics retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve statistics',
        message: error.message
      });
    }
  },

  // Get reports
  getReports: (req, res) => {
    try {
      res.json({
        success: true,
        data: adminData.reports,
        message: 'Reports retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve reports',
        message: error.message
      });
    }
  },

  // Update settings
  updateSettings: (req, res) => {
    try {
      const settingsData = req.body;
      
      // Mock settings update
      res.json({
        success: true,
        data: {
          ...settingsData,
          updatedAt: new Date().toISOString()
        },
        message: 'Settings updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to update settings',
        message: error.message
      });
    }
  }
};

module.exports = adminController;

