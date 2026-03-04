import React from 'react'

export default function BookingCard({booking}){
  return (
    <div className="border rounded p-3 bg-white">
      <div className="flex justify-between">
        <div>
          <div className="font-semibold">{booking?.companionName || 'Companion'}</div>
          <div className="text-sm text-slate-500">{booking?.start_at || '—'}</div>
        </div>
        <div className="text-right">
          <div className="font-medium">{booking?.price ? `$${booking.price}` : ''}</div>
          <div className="text-xs text-slate-400">{booking?.status}</div>
        </div>
      </div>
    </div>
  )
}
