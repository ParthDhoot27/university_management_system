// Purpose: Student timetable page with weekly schedule
'use client';

import Layout from '@/components/Layout';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

export default function StudentTimetable() {
  // Mock data - in real app, this would come from API
  const timetable = {
    monday: [
      { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith', duration: '1.5h' },
      { time: '10:30 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson', duration: '1.5h' },
      { time: '02:00 PM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown', duration: '1.5h' }
    ],
    tuesday: [
      { time: '09:00 AM', subject: 'Chemistry', room: 'D-102', teacher: 'Dr. Wilson', duration: '1.5h' },
      { time: '11:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith', duration: '1h' }
    ],
    wednesday: [
      { time: '09:00 AM', subject: 'Physics Lab', room: 'Lab-1', teacher: 'Prof. Johnson', duration: '2h' },
      { time: '02:00 PM', subject: 'Computer Science Lab', room: 'Lab-2', teacher: 'Dr. Brown', duration: '2h' }
    ],
    thursday: [
      { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith', duration: '1.5h' },
      { time: '10:30 AM', subject: 'Chemistry', room: 'D-102', teacher: 'Dr. Wilson', duration: '1.5h' }
    ],
    friday: [
      { time: '09:00 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson', duration: '1.5h' },
      { time: '11:00 AM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown', duration: '1h' }
    ],
    saturday: [],
    sunday: []
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getTodayClasses = () => {
    const today = new Date().getDay();
    const dayIndex = today === 0 ? 6 : today - 1; // Convert Sunday (0) to 6
    return timetable[days[dayIndex] as keyof typeof timetable];
  };

  const todayClasses = getTodayClasses();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Weekly Timetable</h1>
          <p className="text-primary-100">Your class schedule for the current semester</p>
        </div>

        {/* Today's Classes */}
        {todayClasses.length > 0 && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Today's Classes
            </h2>
            <div className="space-y-3">
              {todayClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{classItem.subject}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {classItem.room}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {classItem.teacher}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{classItem.time}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{classItem.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekly Schedule */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Weekly Schedule</h2>
          <div className="space-y-4">
            {days.map((day, dayIndex) => {
              const dayClasses = timetable[day as keyof typeof timetable];
              return (
                <div key={day} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3">
                    <h3 className="font-medium text-gray-900 dark:text-white">{dayNames[dayIndex]}</h3>
                  </div>
                  <div className="p-4">
                    {dayClasses.length > 0 ? (
                      <div className="space-y-3">
                        {dayClasses.map((classItem, classIndex) => (
                          <div key={classIndex} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{classItem.subject}</p>
                                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                  <span className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {classItem.room}
                                  </span>
                                  <span className="flex items-center">
                                    <User className="h-3 w-3 mr-1" />
                                    {classItem.teacher}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{classItem.time}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{classItem.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400 text-center py-4">No classes scheduled</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Class Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class Timings</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p><span className="font-medium text-gray-900 dark:text-white">Morning Session:</span> 09:00 AM - 12:00 PM</p>
              <p><span className="font-medium text-gray-900 dark:text-white">Afternoon Session:</span> 02:00 PM - 05:00 PM</p>
              <p><span className="font-medium text-gray-900 dark:text-white">Lab Sessions:</span> As per schedule</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Important Notes</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• Arrive 5 minutes before class starts</p>
              <p>• Bring required textbooks and materials</p>
              <p>• Lab sessions require safety equipment</p>
              <p>• Check notice board for any schedule changes</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

