import React from 'react'
import Calendar from '../ui/calendar'
import Input from '../ui/input'

export default function BookingPage(){
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold">Book a companion</h2>
      <div className="mt-4 space-y-3">
        <label className="block">Pickup location<Input placeholder="Address" /></label>
        <label className="block">Start time<Calendar /></label>
        <label className="block">Duration (hours)<Input type="number" defaultValue={1} /></label>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Confirm booking</button>
      </div>
    </div>
  )
}
