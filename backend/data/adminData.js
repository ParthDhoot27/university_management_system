// Purpose: Mock data for admin-related API endpoints
const adminData = {
  dashboard: {
    totalStudents: 2847,
    totalFaculty: 156,
    totalCourses: 89,
    totalDepartments: 12,
    hostelOccupancy: 78,
    feeCollection: 85,
    recentActivities: [
      { type: 'student', action: 'New student registered', user: 'John Doe', time: '2 hours ago', status: 'success' },
      { type: 'faculty', action: 'Professor profile updated', user: 'Dr. Jane Smith', time: '4 hours ago', status: 'success' },
      { type: 'course', action: 'New course added', user: 'CS401 - Machine Learning', time: '6 hours ago', status: 'success' },
      { type: 'system', action: 'System maintenance completed', user: 'Admin', time: '1 day ago', status: 'info' },
      { type: 'fee', action: 'Fee payment processed', user: 'Sarah Wilson', time: '1 day ago', status: 'success' }
    ],
    departmentStats: [
      { name: 'Computer Science', students: 456, faculty: 28, courses: 15 },
      { name: 'Mathematics', students: 234, faculty: 18, courses: 12 },
      { name: 'Physics', students: 189, faculty: 15, courses: 10 },
      { name: 'Chemistry', students: 167, faculty: 12, courses: 8 },
      { name: 'Biology', students: 145, faculty: 10, courses: 7 }
    ],
    upcomingEvents: [
      { date: '2024-01-15', event: 'Faculty Meeting', type: 'meeting', attendees: 156 },
      { date: '2024-01-18', event: 'Student Orientation', type: 'event', attendees: 500 },
      { date: '2024-01-20', event: 'Board Meeting', type: 'meeting', attendees: 25 },
      { date: '2024-01-25', event: 'Sports Day', type: 'event', attendees: 1000 }
    ],
    systemAlerts: [
      { type: 'warning', message: 'Server load is high (85%)', time: '5 minutes ago' },
      { type: 'info', message: 'Database backup completed', time: '2 hours ago' },
      { type: 'success', message: 'All systems operational', time: '1 day ago' }
    ]
  },

  users: [
    { id: 1, name: 'John Doe', email: 'john.doe@university.edu', role: 'student', department: 'Computer Science', status: 'active', createdAt: '2021-09-01' },
    { id: 2, name: 'Dr. Jane Smith', email: 'jane.smith@university.edu', role: 'professor', department: 'Computer Science', status: 'active', createdAt: '2016-09-01' },
    { id: 3, name: 'Admin User', email: 'admin@university.edu', role: 'admin', department: 'Administration', status: 'active', createdAt: '2020-01-01' },
    { id: 4, name: 'Mike Johnson', email: 'mike.johnson@university.edu', role: 'student', department: 'Mathematics', status: 'active', createdAt: '2022-09-01' },
    { id: 5, name: 'Prof. Sarah Wilson', email: 'sarah.wilson@university.edu', role: 'professor', department: 'Physics', status: 'active', createdAt: '2018-09-01' }
  ],

  courses: [
    { id: 1, name: 'Programming Fundamentals', code: 'CS101', credits: 4, department: 'Computer Science', status: 'active', instructor: 'Dr. Jane Smith' },
    { id: 2, name: 'Data Structures', code: 'CS201', credits: 3, department: 'Computer Science', status: 'active', instructor: 'Dr. Jane Smith' },
    { id: 3, name: 'Calculus I', code: 'MATH101', credits: 4, department: 'Mathematics', status: 'active', instructor: 'Prof. Mike Johnson' },
    { id: 4, name: 'Physics I', code: 'PHYS101', credits: 3, department: 'Physics', status: 'active', instructor: 'Prof. Sarah Wilson' },
    { id: 5, name: 'Chemistry I', code: 'CHEM101', credits: 3, department: 'Chemistry', status: 'active', instructor: 'Dr. David Brown' }
  ],

  settings: {
    universityName: 'University of Technology',
    academicYear: '2023-2024',
    semester: 'Spring 2024',
    attendanceThreshold: 75,
    maxCreditsPerSemester: 21,
    gradingSystem: 'GPA',
    notificationSettings: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true
    },
    systemMaintenance: {
      scheduledMaintenance: '2024-01-20 02:00 AM',
      autoBackup: true,
      backupFrequency: 'daily'
    }
  },

  stats: {
    enrollment: {
      totalStudents: 2847,
      newEnrollments: 145,
      graduates: 89,
      dropouts: 12
    },
    faculty: {
      totalFaculty: 156,
      newHires: 8,
      resignations: 3,
      promotions: 5
    },
    academic: {
      totalCourses: 89,
      activeCourses: 85,
      completedCourses: 4,
      averageClassSize: 32
    },
    financial: {
      totalRevenue: 12500000,
      feeCollection: 85,
      pendingFees: 425000,
      scholarships: 150000
    }
  },

  reports: [
    { id: 1, name: 'Student Enrollment Report', type: 'enrollment', generatedAt: '2024-01-10T10:00:00Z', status: 'completed' },
    { id: 2, name: 'Faculty Performance Report', type: 'faculty', generatedAt: '2024-01-08T14:30:00Z', status: 'completed' },
    { id: 3, name: 'Financial Summary Report', type: 'financial', generatedAt: '2024-01-05T09:15:00Z', status: 'completed' },
    { id: 4, name: 'Attendance Analysis Report', type: 'attendance', generatedAt: '2024-01-12T16:45:00Z', status: 'pending' }
  ]
};

module.exports = adminData;

