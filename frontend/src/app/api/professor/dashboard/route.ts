// Purpose: Professor dashboard API route
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data - in production, this would come from a database
    const dashboardData = {
      todaysClasses: [
        { time: '09:00 AM', subject: 'CS101 - Programming Fundamentals', room: 'A-101', students: 45 },
        { time: '11:00 AM', subject: 'CS201 - Data Structures', room: 'B-205', students: 38 },
        { time: '02:00 PM', subject: 'CS301 - Algorithms', room: 'C-301', students: 42 },
      ],
      pendingAssignments: [
        { title: 'Data Structures Assignment 3', subject: 'CS201', dueDate: '2024-01-15', submissions: 28, total: 38 },
        { title: 'Algorithm Design Project', subject: 'CS301', dueDate: '2024-01-18', submissions: 15, total: 42 },
        { title: 'Programming Lab Report', subject: 'CS101', dueDate: '2024-01-20', submissions: 40, total: 45 },
      ],
      attendanceSummary: [
        { subject: 'CS101', totalStudents: 45, present: 42, absent: 3, attendance: 93 },
        { subject: 'CS201', totalStudents: 38, present: 35, absent: 3, attendance: 92 },
        { subject: 'CS301', totalStudents: 42, present: 38, absent: 4, attendance: 90 },
      ],
      upcomingDeadlines: [
        { date: '2024-01-15', task: 'Grade Data Structures Assignment 3', type: 'grading' },
        { date: '2024-01-18', task: 'Submit Mid-term Exam Results', type: 'exam' },
        { date: '2024-01-20', task: 'Review Algorithm Design Projects', type: 'review' },
      ]
    };

    return NextResponse.json({
      success: true,
      data: dashboardData,
      message: 'Professor dashboard data retrieved successfully'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve dashboard data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
