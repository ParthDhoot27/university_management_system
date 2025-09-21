// Purpose: Student attendance page with detailed attendance records
'use client';

import Layout from '@/components/Layout';
import { CheckCircle, XCircle, TrendingUp, Calendar } from 'lucide-react';

export default function StudentAttendance() {
  // Mock data - in real app, this would come from API
  const attendanceData = [
    { subject: 'Mathematics', attendance: 85, total: 40, present: 34, absent: 6, status: 'good' },
    { subject: 'Physics', attendance: 92, total: 35, present: 32, absent: 3, status: 'excellent' },
    { subject: 'Chemistry', attendance: 78, total: 38, present: 30, absent: 8, status: 'warning' },
    { subject: 'Computer Science', attendance: 95, total: 42, present: 40, absent: 2, status: 'excellent' },
    { subject: 'English', attendance: 88, total: 36, present: 32, absent: 4, status: 'good' },
  ];

  const recentAttendance = [
    { date: '2024-01-15', subject: 'Mathematics', status: 'present', time: '09:00 AM' },
    { date: '2024-01-15', subject: 'Physics', status: 'present', time: '10:30 AM' },
    { date: '2024-01-15', subject: 'Computer Science', status: 'present', time: '02:00 PM' },
    { date: '2024-01-14', subject: 'Chemistry', status: 'absent', time: '11:00 AM' },
    { date: '2024-01-14', subject: 'English', status: 'present', time: '03:00 PM' },
  ];

  const overallAttendance = Math.round(
    attendanceData.reduce((sum, sub) => sum + sub.attendance, 0) / attendanceData.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 dark:text-green-400';
      case 'good': return 'text-blue-600 dark:text-blue-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'poor': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 dark:bg-green-900/20';
      case 'good': return 'bg-blue-100 dark:bg-blue-900/20';
      case 'warning': return 'bg-yellow-100 dark:bg-yellow-900/20';
      case 'poor': return 'bg-red-100 dark:bg-red-900/20';
      default: return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Attendance Overview</h1>
          <p className="text-primary-100">Track your attendance across all subjects</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Attendance</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallAttendance}%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Classes</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {attendanceData.reduce((sum, sub) => sum + sub.total, 0)}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Classes Attended</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {attendanceData.reduce((sum, sub) => sum + sub.present, 0)}
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Attendance */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Subject-wise Attendance</h2>
          <div className="space-y-4">
            {attendanceData.map((subject, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">{subject.subject}</h3>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBg(subject.status)} ${getStatusColor(subject.status)}`}>
                      {subject.attendance}%
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {subject.present}/{subject.total} classes
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      subject.attendance >= 90 ? 'bg-green-500' :
                      subject.attendance >= 75 ? 'bg-blue-500' :
                      subject.attendance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${subject.attendance}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Present: {subject.present}</span>
                  <span>Absent: {subject.absent}</span>
                  <span>
                    {subject.attendance >= 90 ? 'Excellent' :
                     subject.attendance >= 75 ? 'Good' :
                     subject.attendance >= 60 ? 'Needs Improvement' : 'Poor'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Attendance */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Attendance</h2>
          <div className="space-y-3">
            {recentAttendance.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    record.status === 'present' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                  }`}>
                    {record.status === 'present' ? (
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{record.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{record.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    record.status === 'present' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {record.status}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{record.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Policy */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Attendance Policy</h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>• Minimum attendance requirement: <span className="font-medium text-gray-900 dark:text-white">75%</span></p>
            <p>• Students with less than 75% attendance may not be allowed to appear for final examinations.</p>
            <p>• Medical certificates are required for absences due to illness.</p>
            <p>• Attendance is marked for each class session and cannot be made up later.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

