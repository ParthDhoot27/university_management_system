#!/bin/bash

echo "Starting ERP-Lite Application..."
echo

echo "Starting Frontend Server (with integrated API routes)..."
cd frontend && npm run dev &
FRONTEND_PID=$!

echo
echo "Server is starting..."
echo "Application: http://localhost:3000"
echo
echo "Press Ctrl+C to stop the server"

# Wait for user interrupt
trap "echo 'Stopping server...'; kill $FRONTEND_PID; exit" INT
wait

