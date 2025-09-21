// Purpose: Health check API route for ERP-Lite
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    message: 'ERP-Lite API Server is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
}
