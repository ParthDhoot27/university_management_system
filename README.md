# ERP-Lite Prototype

A hackathon-ready ERP system with role-based authentication for students, professors, and admins.

## 🚀 Features

- **Role-based Authentication**: Student, Professor, Admin panels with secure login
- **Modern UI/UX**: Minimal, soothing design with day/night mode toggle
- **Mobile-first**: Optimized for Android and touch devices
- **Clean Architecture**: Modular frontend and backend structure
- **Real-time Data**: Mock APIs with realistic data for all panels
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + TypeScript
- **Backend**: Node.js + Express + CORS + Helmet
- **Authentication**: Role-based with localStorage persistence
- **Icons**: Lucide React for consistent iconography
- **Styling**: Custom Tailwind configuration with soft shadows and rounded corners

## 🏃‍♂️ Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Clone and navigate to project
cd "SIH ERP base version"

# Install all dependencies
npm install

# Start both servers concurrently
npm run dev
```

### Option 2: Manual Setup
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install

# Start backend server (Terminal 1)
cd backend && npm run dev

# Start frontend server (Terminal 2)
cd frontend && npm run dev
```

### Option 3: Batch Scripts (Windows)
```bash
# Double-click start.bat or run:
start.bat
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🔐 Default Login Credentials

| Role | Email | Password |
|------|-------|----------|
| **Student** | student@example.com | password123 |
| **Professor** | professor@example.com | password123 |
| **Admin** | admin@example.com | password123 |

## 📁 Project Structure

```
├── frontend/                 # Next.js 14 Application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── login/       # Authentication page
│   │   │   ├── student/     # Student dashboard & pages
│   │   │   ├── professor/   # Professor dashboard & pages
│   │   │   └── admin/       # Admin dashboard & pages
│   │   ├── components/      # Reusable components
│   │   ├── context/         # React contexts (Auth, Theme)
│   │   ├── types/           # TypeScript type definitions
│   │   └── lib/             # Utility functions
│   ├── tailwind.config.js   # Custom Tailwind configuration
│   └── package.json
├── backend/                 # Express API Server
│   ├── routes/              # API route definitions
│   ├── controllers/         # Business logic controllers
│   ├── data/               # Mock data for APIs
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   └── package.json
├── package.json            # Root package.json for scripts
├── start.bat              # Windows startup script
├── start.sh               # Unix startup script
└── README.md
```

## 🎨 UI/UX Features

- **Day/Night Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Soft Shadows**: Subtle elevation with custom shadow utilities
- **Rounded Corners**: Consistent border-radius throughout
- **Color Palette**: Primary blues and secondary grays
- **Typography**: Inter font family for modern readability
- **Icons**: Lucide React for consistent iconography

## 📱 Student Panel Features

- **Dashboard**: Overview with attendance, schedule, and upcoming events
- **Attendance**: Detailed attendance tracking with visual progress bars
- **Timetable**: Weekly schedule with today's classes highlighted
- **Exams & Events**: Upcoming exams, assignments, and university events
- **Profile**: Personal information and academic details

## 👨‍🏫 Professor Panel Features

- **Dashboard**: Class overview, attendance summary, and pending tasks
- **Attendance**: Mark and track student attendance
- **Assignments**: Create, manage, and grade assignments
- **Classes**: Manage multiple classes and student lists
- **Profile**: Professional information and teaching details

## 👨‍💼 Admin Panel Features

- **Dashboard**: University-wide statistics and system overview
- **Users**: Add, edit, and manage students and faculty
- **Courses**: Create and manage course offerings
- **Settings**: System configuration and preferences
- **Reports**: Generate various administrative reports

## 🔌 API Endpoints

### Student APIs
- `GET /api/student/dashboard` - Dashboard data
- `GET /api/student/attendance` - Attendance records
- `GET /api/student/timetable` - Class schedule
- `GET /api/student/exams` - Exam information
- `GET /api/student/profile` - Student profile

### Professor APIs
- `GET /api/professor/dashboard` - Professor dashboard
- `GET /api/professor/classes` - Class information
- `POST /api/professor/attendance/mark` - Mark attendance
- `POST /api/professor/assignments/create` - Create assignment
- `GET /api/professor/students/:classId` - Class students

### Admin APIs
- `GET /api/admin/dashboard` - Admin dashboard
- `GET /api/admin/users` - All users
- `POST /api/admin/users/add` - Add new user
- `GET /api/admin/courses` - All courses
- `POST /api/admin/courses/add` - Add new course
- `GET /api/admin/stats` - System statistics

## 🚀 Development

### Frontend Development
```bash
cd frontend
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
```

### Backend Development
```bash
cd backend
npm run dev    # Start with nodemon
npm start      # Start production server
```

## 🔧 Customization

### Adding New Features
1. **Frontend**: Add new pages in `src/app/` directory
2. **Backend**: Add new routes in `routes/` and controllers in `controllers/`
3. **Data**: Update mock data in `backend/data/` files

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Update `frontend/src/app/globals.css` for global styles
- Use existing utility classes for consistent styling

## 📝 Notes

- This is a **prototype** designed for hackathons and demonstrations
- All data is **mock data** - no real database integration
- Authentication is **simplified** for demo purposes
- Ready for **production enhancement** with real database and security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
