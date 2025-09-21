// Purpose: Professor dashboard with class management and student overview
'use client';

import Layout from '@/components/Layout';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  ClipboardList,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Upload,
  Download
} from 'lucide-react';

export default function ProfessorDashboard() {
  // Mock data - in real app, this would come from API
  const todaysClasses = [
    { time: '09:00 AM', subject: 'CS101 - Programming Fundamentals', room: 'A-101', students: 45 },
    { time: '11:00 AM', subject: 'CS201 - Data Structures', room: 'B-205', students: 38 },
    { time: '02:00 PM', subject: 'CS301 - Algorithms', room: 'C-301', students: 42 },
  ];

  const pendingAssignments = [
    { title: 'Data Structures Assignment 3', subject: 'CS201', dueDate: '2024-01-15', submissions: 28, total: 38 },
    { title: 'Algorithm Design Project', subject: 'CS301', dueDate: '2024-01-18', submissions: 15, total: 42 },
    { title: 'Programming Lab Report', subject: 'CS101', dueDate: '2024-01-20', submissions: 40, total: 45 },
  ];

  const attendanceSummary = [
    { subject: 'CS101', totalStudents: 45, present: 42, absent: 3, attendance: 93 },
    { subject: 'CS201', totalStudents: 38, present: 35, absent: 3, attendance: 92 },
    { subject: 'CS301', totalStudents: 42, present: 38, absent: 4, attendance: 90 },
  ];

  const upcomingDeadlines = [
    { date: '2024-01-15', task: 'Grade Data Structures Assignment 3', type: 'grading' },
    { date: '2024-01-18', task: 'Submit Mid-term Exam Results', type: 'exam' },
    { date: '2024-01-20', task: 'Review Algorithm Design Projects', type: 'review' },
  ];

  const totalStudents = attendanceSummary.reduce((sum, sub) => sum + sub.totalStudents, 0);
  const totalPresent = attendanceSummary.reduce((sum, sub) => sum + sub.present, 0);
  const overallAttendance = Math.round((totalPresent / totalStudents) * 100);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Dr. Jane Smith!</h1>
          <p className="text-primary-100">Here's your teaching overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's Classes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{todaysClasses.length}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalStudents}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Attendance</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallAttendance}%</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Reviews</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {pendingAssignments.reduce((sum, ass) => sum + (ass.total - ass.submissions), 0)}
                </p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Classes</h2>
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {todaysClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{classItem.subject}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{classItem.room}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{classItem.time}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{classItem.students} students</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Attendance Summary</h2>
              <CheckCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {attendanceSummary.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{subject.subject}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{subject.attendance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        subject.attendance >= 90 ? 'bg-green-500' :
                        subject.attendance >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${subject.attendance}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{subject.present}/{subject.totalStudents} present</span>
                    <span>{subject.absent} absent</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignment Management */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Assignment Management</h2>
            <div className="flex space-x-2">
              <button className="btn-secondary text-sm">
                <Upload className="h-4 w-4 mr-1" />
                Upload
              </button>
              <button className="btn-secondary text-sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {pendingAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{assignment.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.subject} • Due: {assignment.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {assignment.submissions}/{assignment.total} submitted
                  </p>
                  <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mt-1">
                    <div
                      className="bg-primary-500 h-1 rounded-full"
                      style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Deadlines</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`p-2 rounded-full ${
                  deadline.type === 'grading' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                  deadline.type === 'exam' ? 'bg-red-100 dark:bg-red-900/20' :
                  'bg-green-100 dark:bg-green-900/20'
                }`}>
                  {deadline.type === 'grading' ? <ClipboardList className="h-4 w-4 text-yellow-600 dark:text-yellow-400" /> :
                   deadline.type === 'exam' ? <BookOpen className="h-4 w-4 text-red-600 dark:text-red-400" /> :
                   <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{deadline.task}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{deadline.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  deadline.type === 'grading' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                  deadline.type === 'exam' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                }`}>
                  {deadline.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

