import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CompanionBrowsePage from './pages/CompanionBrowsePage'
import CompanionDetailPage from './pages/CompanionDetailPage'
import BookingPage from './pages/BookingPage'
import LiveTrackingPage from './pages/LiveTrackingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserDashboard from './pages/UserDashboard'
import CompanionDashboard from './pages/CompanionDashboard'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/browse" element={<CompanionBrowsePage/>} />
          <Route path="/companion/:id" element={<CompanionDetailPage/>} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/live" element={<LiveTrackingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<UserDashboard/>} />
          <Route path="/companion-dashboard" element={<CompanionDashboard/>} />
        </Routes>
      </main>
    </div>
  )
}
