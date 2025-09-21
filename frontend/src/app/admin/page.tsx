// Purpose: Admin dashboard with university management overview and controls
'use client';

import Layout from '@/components/Layout';
import { 
  Users, 
  GraduationCap, 
  Building, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Calendar,
  BarChart3,
  Settings,
  Plus
} from 'lucide-react';

export default function AdminDashboard() {
  // Mock data - in real app, this would come from API
  const universityStats = {
    totalStudents: 2847,
    totalFaculty: 156,
    totalCourses: 89,
    totalDepartments: 12,
    hostelOccupancy: 78,
    feeCollection: 85,
  };

  const recentActivities = [
    { type: 'student', action: 'New student registered', user: 'John Doe', time: '2 hours ago', status: 'success' },
    { type: 'faculty', action: 'Professor profile updated', user: 'Dr. Jane Smith', time: '4 hours ago', status: 'success' },
    { type: 'course', action: 'New course added', user: 'CS401 - Machine Learning', time: '6 hours ago', status: 'success' },
    { type: 'system', action: 'System maintenance completed', user: 'Admin', time: '1 day ago', status: 'info' },
    { type: 'fee', action: 'Fee payment processed', user: 'Sarah Wilson', time: '1 day ago', status: 'success' },
  ];

  const departmentStats = [
    { name: 'Computer Science', students: 456, faculty: 28, courses: 15 },
    { name: 'Mathematics', students: 234, faculty: 18, courses: 12 },
    { name: 'Physics', students: 189, faculty: 15, courses: 10 },
    { name: 'Chemistry', students: 167, faculty: 12, courses: 8 },
    { name: 'Biology', students: 145, faculty: 10, courses: 7 },
  ];

  const upcomingEvents = [
    { date: '2024-01-15', event: 'Faculty Meeting', type: 'meeting', attendees: 156 },
    { date: '2024-01-18', event: 'Student Orientation', type: 'event', attendees: 500 },
    { date: '2024-01-20', event: 'Board Meeting', type: 'meeting', attendees: 25 },
    { date: '2024-01-25', event: 'Sports Day', type: 'event', attendees: 1000 },
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Server load is high (85%)', time: '5 minutes ago' },
    { type: 'info', message: 'Database backup completed', time: '2 hours ago' },
    { type: 'success', message: 'All systems operational', time: '1 day ago' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
          <p className="text-primary-100">University management overview and system status</p>
        </div>

        {/* University Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.totalStudents.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+5.2%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Faculty</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.totalFaculty}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+2.1%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Courses</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.totalCourses}</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                {/* <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" /> */}
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+3.4%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Departments</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.totalDepartments}</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <Building className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-gray-500 dark:text-gray-400">No change</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Hostel Occupancy</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.hostelOccupancy}%</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                <Building className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-600 dark:text-red-400">-2.1%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Fee Collection</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{universityStats.feeCollection}%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+8.5%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Overview */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Department Overview</h2>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{dept.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{dept.courses} courses</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{dept.students} students</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{dept.faculty} faculty</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h2>
              <CheckCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className={`p-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                    activity.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                    'bg-blue-100 dark:bg-blue-900/20'
                  }`}>
                    {activity.type === 'student' ? <Users className="h-4 w-4 text-green-600 dark:text-green-400" /> :
                     activity.type === 'faculty' ? <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" /> :
                    //  activity.type === 'course' ? <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" /> :
                     activity.type === 'system' ? <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" /> :
                     <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                    event.type === 'meeting' ? 'bg-blue-100 dark:bg-blue-900/20' :
                    'bg-green-100 dark:bg-green-900/20'
                  }`}>
                    {event.type === 'meeting' ? <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" /> :
                     <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{event.event}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{event.date} • {event.attendees} attendees</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    event.type === 'meeting' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                    'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  }`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">System Alerts</h2>
              <AlertCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className={`p-2 rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                    alert.type === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                    'bg-blue-100 dark:bg-blue-900/20'
                  }`}>
                    {alert.type === 'warning' ? <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" /> :
                     alert.type === 'success' ? <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" /> :
                     <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{alert.message}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{alert.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    alert.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {alert.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
            <Settings className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="btn-secondary flex flex-col items-center p-4">
              <Plus className="h-6 w-6 mb-2" />
              <span className="text-sm">Add Student</span>
            </button>
            <button className="btn-secondary flex flex-col items-center p-4">
              <Plus className="h-6 w-6 mb-2" />
              <span className="text-sm">Add Faculty</span>
            </button>
            <button className="btn-secondary flex flex-col items-center p-4">
              <Plus className="h-6 w-6 mb-2" />
              <span className="text-sm">Add Course</span>
            </button>
            <button className="btn-secondary flex flex-col items-center p-4">
              <Settings className="h-6 w-6 mb-2" />
              <span className="text-sm">System Settings</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

