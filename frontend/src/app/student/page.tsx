// Purpose: Student dashboard with overview widgets and quick access
'use client';

import Layout from '@/components/Layout';
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  AlertCircle,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';

export default function StudentDashboard() {
  // Mock data - in real app, this would come from API
  const attendanceData = [
    { subject: 'Mathematics', attendance: 85, total: 40, present: 34 },
    { subject: 'Physics', attendance: 92, total: 35, present: 32 },
    { subject: 'Chemistry', attendance: 78, total: 38, present: 30 },
    { subject: 'Computer Science', attendance: 95, total: 42, present: 40 },
  ];

  const todaysSchedule = [
    { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' },
    { time: '10:30 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson' },
    { time: '02:00 PM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown' },
  ];

  const upcomingEvents = [
    { date: '2024-01-15', event: 'Mid-term Exam - Mathematics', type: 'exam' },
    { date: '2024-01-18', event: 'Physics Lab Assignment Due', type: 'assignment' },
    { date: '2024-01-20', event: 'Sports Day', type: 'event' },
  ];

  const overallAttendance = Math.round(
    attendanceData.reduce((sum, sub) => sum + sub.attendance, 0) / attendanceData.length
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-primary-100">Here's your academic overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Attendance</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallAttendance}%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's Classes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{todaysSchedule.length}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming Exams</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {upcomingEvents.filter(e => e.type === 'exam').length}
                </p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Assignments Due</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {upcomingEvents.filter(e => e.type === 'assignment').length}
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <AlertCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Schedule</h2>
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {todaysSchedule.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{schedule.subject}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{schedule.room} • {schedule.teacher}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Overview */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Attendance Overview</h2>
              <CheckCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {attendanceData.map((subject, index) => (
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
                    <span>{subject.present}/{subject.total} classes</span>
                    <span>
                      {subject.attendance >= 90 ? 'Excellent' :
                       subject.attendance >= 75 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`p-2 rounded-full ${
                  event.type === 'exam' ? 'bg-red-100 dark:bg-red-900/20' :
                  event.type === 'assignment' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                  'bg-green-100 dark:bg-green-900/20'
                }`}>
                  {event.type === 'exam' ? <BookOpen className="h-4 w-4 text-red-600 dark:text-red-400" /> :
                   event.type === 'assignment' ? <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" /> :
                   <Award className="h-4 w-4 text-green-600 dark:text-green-400" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{event.event}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.type === 'exam' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  event.type === 'assignment' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                }`}>
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

