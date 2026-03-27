// Purpose: Exams and events page for students
'use client';

import Layout from '@/components/Layout';
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, User, FileText } from 'lucide-react';

export default function StudentExams() {
  // Mock data - in real app, this would come from API
  const upcomingExams = [
    { id: 1, subject: 'Mathematics', date: '2024-02-15', time: '09:00 AM', duration: '3 hours', room: 'A-101', invigilator: 'Dr. Smith', status: 'scheduled' },
    { id: 2, subject: 'Physics', date: '2024-02-20', time: '02:00 PM', duration: '3 hours', room: 'B-205', invigilator: 'Prof. Johnson', status: 'scheduled' },
    { id: 3, subject: 'Chemistry', date: '2024-02-25', time: '10:00 AM', duration: '2.5 hours', room: 'D-102', invigilator: 'Dr. Wilson', status: 'scheduled' },
  ];

  const pastExams = [
    { id: 4, subject: 'Computer Science', date: '2024-01-20', marks: 85, total: 100, grade: 'A', status: 'completed' },
    { id: 5, subject: 'English', date: '2024-01-15', marks: 78, total: 100, grade: 'B+', status: 'completed' },
    { id: 6, subject: 'History', date: '2024-01-10', marks: 88, total: 100, grade: 'A', status: 'completed' },
  ];

  const events = [
    { id: 1, name: 'Science Fair', date: '2024-02-10', time: '02:00 PM', location: 'Main Hall', type: 'academic', attendees: 150 },
    { id: 2, name: 'Sports Day', date: '2024-02-12', time: '08:00 AM', location: 'Sports Ground', type: 'sports', attendees: 300 },
    { id: 3, name: 'Cultural Festival', date: '2024-02-18', time: '06:00 PM', location: 'Auditorium', type: 'cultural', attendees: 500 },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Exams & Events</h1>

        {/* Upcoming Exams */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Upcoming Exams</h2>
          <div className="grid gap-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="card p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exam.subject}</h3>
                    <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(exam.date).toISOString().split('T')[0]}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {exam.time} ({exam.duration})
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exam.room}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Invigilator: {exam.invigilator}
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-sm font-medium">
                    Scheduled
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Exam Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Past Exam Results</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Marks</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Grade</th>
                </tr>
              </thead>
              <tbody>
                {pastExams.map((exam) => (
                  <tr key={exam.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{exam.subject}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {new Date(exam.date).toISOString().split('T')[0]}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                      {exam.marks}/{exam.total}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {exam.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'academic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                    event.type === 'sports' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toISOString().split('T')[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {event.attendees} expected attendees
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
