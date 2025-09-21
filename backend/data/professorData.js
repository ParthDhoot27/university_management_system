// Purpose: Mock data for professor-related API endpoints
const professorData = {
  dashboard: {
    todaysClasses: 3,
    totalStudents: 125,
    overallAttendance: 91,
    pendingReviews: 15,
    todaysSchedule: [
      { time: '09:00 AM', subject: 'CS101 - Programming Fundamentals', room: 'A-101', students: 45 },
      { time: '11:00 AM', subject: 'CS201 - Data Structures', room: 'B-205', students: 38 },
      { time: '02:00 PM', subject: 'CS301 - Algorithms', room: 'C-301', students: 42 }
    ],
    upcomingDeadlines: [
      { date: '2024-01-15', task: 'Grade Data Structures Assignment 3', type: 'grading' },
      { date: '2024-01-18', task: 'Submit Mid-term Exam Results', type: 'exam' },
      { date: '2024-01-20', task: 'Review Algorithm Design Projects', type: 'review' }
    ]
  },

  classes: [
    { id: 1, name: 'CS101 - Programming Fundamentals', code: 'CS101', students: 45, room: 'A-101', schedule: 'Mon, Wed, Fri 09:00 AM' },
    { id: 2, name: 'CS201 - Data Structures', code: 'CS201', students: 38, room: 'B-205', schedule: 'Tue, Thu 11:00 AM' },
    { id: 3, name: 'CS301 - Algorithms', code: 'CS301', students: 42, room: 'C-301', schedule: 'Mon, Wed 02:00 PM' }
  ],

  attendance: [
    { subject: 'CS101', totalStudents: 45, present: 42, absent: 3, attendance: 93 },
    { subject: 'CS201', totalStudents: 38, present: 35, absent: 3, attendance: 92 },
    { subject: 'CS301', totalStudents: 42, present: 38, absent: 4, attendance: 90 }
  ],

  assignments: [
    { id: 1, title: 'Data Structures Assignment 3', subject: 'CS201', dueDate: '2024-01-15', submissions: 28, total: 38, status: 'active' },
    { id: 2, title: 'Algorithm Design Project', subject: 'CS301', dueDate: '2024-01-18', submissions: 15, total: 42, status: 'active' },
    { id: 3, title: 'Programming Lab Report', subject: 'CS101', dueDate: '2024-01-20', submissions: 40, total: 45, status: 'active' }
  ],

  profile: {
    id: 2,
    name: 'Dr. Jane Smith',
    email: 'jane.smith@university.edu',
    employeeId: 'EMP002',
    department: 'Computer Science',
    designation: 'Associate Professor',
    phone: '+1-234-567-8902',
    office: 'CS Building, Room 205',
    specialization: 'Data Structures, Algorithms',
    experience: '8 years',
    qualification: 'Ph.D. in Computer Science',
    joiningDate: '2016-09-01'
  },

  students: [
    { id: 1, name: 'John Doe', studentId: 'STU001', classId: 1, attendance: 95, grade: 'A' },
    { id: 2, name: 'Jane Smith', studentId: 'STU002', classId: 1, attendance: 88, grade: 'B+' },
    { id: 3, name: 'Mike Johnson', studentId: 'STU003', classId: 2, attendance: 92, grade: 'A-' },
    { id: 4, name: 'Sarah Wilson', studentId: 'STU004', classId: 2, attendance: 85, grade: 'B' },
    { id: 5, name: 'David Brown', studentId: 'STU005', classId: 3, attendance: 90, grade: 'A' }
  ],

  grades: [
    { studentId: 'STU001', studentName: 'John Doe', subject: 'CS101', grade: 'A', gpa: 3.8 },
    { studentId: 'STU002', studentName: 'Jane Smith', subject: 'CS101', grade: 'B+', gpa: 3.3 },
    { studentId: 'STU003', studentName: 'Mike Johnson', subject: 'CS201', grade: 'A-', gpa: 3.7 },
    { studentId: 'STU004', studentName: 'Sarah Wilson', subject: 'CS201', grade: 'B', gpa: 3.0 },
    { studentId: 'STU005', studentName: 'David Brown', subject: 'CS301', grade: 'A', gpa: 4.0 }
  ]
};

module.exports = professorData;

