// Purpose: Student profile page with personal and academic information
'use client';

import Layout from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit2, Camera } from 'lucide-react';
import { useState } from 'react';

export default function StudentProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Mock data - in real app, this would come from API
  const studentData = {
    id: 'STU001',
    email: user?.email || 'student@example.com',
    name: user?.name || 'John Doe',
    phone: '+1 (555) 123-4567',
    address: '123 College Street, University City',
    enrollmentDate: '2022-08-15',
    department: 'Computer Science',
    semester: '4th Semester',
    gpa: '3.8',
    totalCredits: 48,
    courses: [
      { code: 'CS101', name: 'Data Structures', credits: 3, grade: 'A' },
      { code: 'CS102', name: 'Web Development', credits: 4, grade: 'A-' },
      { code: 'CS103', name: 'Database Systems', credits: 3, grade: 'B+' },
      { code: 'CS104', name: 'Algorithms', credits: 4, grade: 'A' },
    ],
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <img src={user?.avatar} alt={user?.name} className="w-24 h-24 rounded-full object-cover" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }} />
                </div>
                <button className="absolute bottom-0 right-0 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{studentData.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">ID: {studentData.id}</p>
                <p className="text-gray-600 dark:text-gray-400">{studentData.department}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{studentData.semester}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors"
            >
              <Edit2 className="h-4 w-4" />
              {isEditing ? 'Done' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white">{studentData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white">{studentData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Address</p>
                  <p className="text-gray-900 dark:text-white">{studentData.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enrollment Date</p>
                  <p className="text-gray-900 dark:text-white">
                    {new Date(studentData.enrollmentDate).toISOString().split('T')[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Academic Information</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">GPA</span>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{studentData.gpa}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Credits Completed</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{studentData.totalCredits}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
                <p className="text-gray-900 dark:text-white">{studentData.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Semester</p>
                <p className="text-gray-900 dark:text-white">{studentData.semester}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Courses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Code</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Course Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Credits</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Grade</th>
                </tr>
              </thead>
              <tbody>
                {studentData.courses.map((course) => (
                  <tr key={course.code} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-gray-100">{course.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{course.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{course.credits}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {course.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
