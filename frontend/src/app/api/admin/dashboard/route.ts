// Purpose: Admin dashboard API route
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data - in production, this would come from a database
    const dashboardData = {
      universityStats: {
        totalStudents: 2847,
        totalFaculty: 156,
        totalCourses: 89,
        totalDepartments: 12,
        hostelOccupancy: 78,
        feeCollection: 85,
      },
      recentActivities: [
        { type: 'student', action: 'New student registered', user: 'John Doe', time: '2 hours ago', status: 'success' },
        { type: 'faculty', action: 'Professor profile updated', user: 'Dr. Jane Smith', time: '4 hours ago', status: 'success' },
        { type: 'course', action: 'New course added', user: 'CS401 - Machine Learning', time: '6 hours ago', status: 'success' },
        { type: 'system', action: 'System maintenance completed', user: 'Admin', time: '1 day ago', status: 'info' },
        { type: 'fee', action: 'Fee payment processed', user: 'Sarah Wilson', time: '1 day ago', status: 'success' },
      ],
      departmentStats: [
        { name: 'Computer Science', students: 456, faculty: 28, courses: 15 },
        { name: 'Mathematics', students: 234, faculty: 18, courses: 12 },
        { name: 'Physics', students: 189, faculty: 15, courses: 10 },
        { name: 'Chemistry', students: 167, faculty: 12, courses: 8 },
        { name: 'Biology', students: 145, faculty: 10, courses: 7 },
      ],
      upcomingEvents: [
        { date: '2024-01-15', event: 'Faculty Meeting', type: 'meeting', attendees: 156 },
        { date: '2024-01-18', event: 'Student Orientation', type: 'event', attendees: 500 },
        { date: '2024-01-20', event: 'Board Meeting', type: 'meeting', attendees: 25 },
        { date: '2024-01-25', event: 'Sports Day', type: 'event', attendees: 1000 },
      ],
      systemAlerts: [
        { type: 'warning', message: 'Server load is high (85%)', time: '5 minutes ago' },
        { type: 'info', message: 'Database backup completed', time: '2 hours ago' },
        { type: 'success', message: 'All systems operational', time: '1 day ago' },
      ]
    };

    return NextResponse.json({
      success: true,
      data: dashboardData,
      message: 'Admin dashboard data retrieved successfully'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve dashboard data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
