import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-lg">SafeStride</Link>
        <nav className="space-x-4">
          <Link to="/browse" className="text-slate-600">Browse</Link>
          <Link to="/dashboard" className="text-slate-600">My Bookings</Link>
          <Link to="/login" className="text-slate-600">Log in</Link>
        </nav>
      </div>
    </header>
  )
}
