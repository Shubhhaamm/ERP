import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import StudentDashboard from './StudentDashboard'
import TeacherDashboard from './TeacherDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
    </Routes>
  )
}

export default App