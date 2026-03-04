import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanionCard({companion}){
  return (
    <div className="border rounded p-3 bg-white">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-slate-200 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <Link to={`/companion/${companion?.id}`} className="font-semibold">{companion?.name || 'Companion'}</Link>
          <div className="text-sm text-slate-500">{companion?.languages?.join(', ') || '—'}</div>
        </div>
        <div className="text-right">
          <div className="font-medium">${companion?.hourly_rate || '—'}</div>
        </div>
      </div>
    </div>
  )
}
