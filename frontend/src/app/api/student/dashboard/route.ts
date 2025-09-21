// Purpose: Student dashboard API route
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data - in production, this would come from a database
    const dashboardData = {
      attendance: [
        { subject: 'Mathematics', attendance: 85, total: 40, present: 34 },
        { subject: 'Physics', attendance: 92, total: 35, present: 32 },
        { subject: 'Chemistry', attendance: 78, total: 38, present: 30 },
        { subject: 'Computer Science', attendance: 95, total: 42, present: 40 },
      ],
      todaysSchedule: [
        { time: '09:00 AM', subject: 'Mathematics', room: 'A-101', teacher: 'Dr. Smith' },
        { time: '10:30 AM', subject: 'Physics', room: 'B-205', teacher: 'Prof. Johnson' },
        { time: '02:00 PM', subject: 'Computer Science', room: 'C-301', teacher: 'Dr. Brown' },
      ],
      upcomingEvents: [
        { date: '2024-01-15', event: 'Mid-term Exam - Mathematics', type: 'exam' },
        { date: '2024-01-18', event: 'Physics Lab Assignment Due', type: 'assignment' },
        { date: '2024-01-20', event: 'Sports Day', type: 'event' },
      ]
    };

    return NextResponse.json({
      success: true,
      data: dashboardData,
      message: 'Student dashboard data retrieved successfully'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve dashboard data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
