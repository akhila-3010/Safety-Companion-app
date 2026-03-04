import React from 'react'
import BookingCard from '../components/BookingCard'

const sample = [{id:1,companionName:'Asha',start_at:'2026-03-05T20:00',price:20,status:'scheduled'}]

export default function UserDashboard(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold">My Bookings</h2>
      <div className="mt-4 space-y-3">
        {sample.map(b=> <BookingCard key={b.id} booking={b} />)}
      </div>
    </div>
  )
}
