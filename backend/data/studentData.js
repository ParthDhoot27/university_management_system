// Purpose: Mock data for student-related API endpoints
const studentData = {
  dashboard: {
    overallAttendance: 87,
    todaysClasses: 3,
    upcomingExams: 2,
    assignmentsDue: 1,
    todaysSchedule: [
      { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' },
      { time: '10:30 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson' },
      { time: '02:00 PM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown' }
    ],
    upcomingEvents: [
      { date: '2024-01-15', event: 'Mid-term Exam - Mathematics', type: 'exam' },
      { date: '2024-01-18', event: 'Physics Lab Assignment Due', type: 'assignment' },
      { date: '2024-01-20', event: 'Sports Day', type: 'event' }
    ]
  },

  attendance: [
    { subject: 'Mathematics', attendance: 85, total: 40, present: 34 },
    { subject: 'Physics', attendance: 92, total: 35, present: 32 },
    { subject: 'Chemistry', attendance: 78, total: 38, present: 30 },
    { subject: 'Computer Science', attendance: 95, total: 42, present: 40 }
  ],

  timetable: {
    monday: [
      { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' },
      { time: '10:30 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson' },
      { time: '02:00 PM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown' }
    ],
    tuesday: [
      { time: '09:00 AM', subject: 'Chemistry', room: 'D-102', teacher: 'Dr. Wilson' },
      { time: '11:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' }
    ],
    wednesday: [
      { time: '09:00 AM', subject: 'Physics Lab', room: 'Lab-1', teacher: 'Prof. Johnson' },
      { time: '02:00 PM', subject: 'Computer Science Lab', room: 'Lab-2', teacher: 'Dr. Brown' }
    ],
    thursday: [
      { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' },
      { time: '10:30 AM', subject: 'Chemistry', room: 'D-102', teacher: 'Dr. Wilson' }
    ],
    friday: [
      { time: '09:00 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson' },
      { time: '11:00 AM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown' }
    ]
  },

  exams: [
    { id: 1, subject: 'Mathematics', date: '2024-01-15', time: '09:00 AM', duration: '3 hours', type: 'Mid-term' },
    { id: 2, subject: 'Physics', date: '2024-01-18', time: '10:30 AM', duration: '2 hours', type: 'Quiz' },
    { id: 3, subject: 'Computer Science', date: '2024-01-25', time: '02:00 PM', duration: '3 hours', type: 'Final' }
  ],

  profile: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@university.edu',
    studentId: 'STU001',
    department: 'Computer Science',
    year: '3rd Year',
    semester: '6th Semester',
    phone: '+1-234-567-8900',
    address: '123 University Street, City, State 12345',
    emergencyContact: 'Jane Doe (+1-234-567-8901)',
    bloodGroup: 'O+',
    dateOfBirth: '2002-05-15',
    enrollmentDate: '2021-09-01'
  },

  grades: [
    { subject: 'Mathematics', grade: 'A', gpa: 3.8, credits: 4 },
    { subject: 'Physics', grade: 'A-', gpa: 3.7, credits: 3 },
    { subject: 'Chemistry', grade: 'B+', gpa: 3.3, credits: 3 },
    { subject: 'Computer Science', grade: 'A', gpa: 4.0, credits: 4 }
  ],

  assignments: [
    { id: 1, title: 'Data Structures Assignment 3', subject: 'Computer Science', dueDate: '2024-01-15', status: 'submitted', grade: 'A' },
    { id: 2, title: 'Physics Lab Report', subject: 'Physics', dueDate: '2024-01-18', status: 'pending', grade: null },
    { id: 3, title: 'Mathematics Problem Set', subject: 'Mathematics', dueDate: '2024-01-20', status: 'submitted', grade: 'B+' }
  ],

  notifications: [
    { id: 1, title: 'Assignment Due Tomorrow', message: 'Physics Lab Report is due tomorrow', type: 'assignment', timestamp: '2024-01-17T10:00:00Z' },
    { id: 2, title: 'Exam Schedule Updated', message: 'Mathematics mid-term exam has been rescheduled', type: 'exam', timestamp: '2024-01-16T14:30:00Z' },
    { id: 3, title: 'Grade Posted', message: 'Your Data Structures assignment grade has been posted', type: 'grade', timestamp: '2024-01-15T16:45:00Z' }
  ]
};

module.exports = studentData;

