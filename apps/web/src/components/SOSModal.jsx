import React from 'react'

export default function SOSModal({open, onClose}){
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-md w-full">
        <h3 className="text-lg font-bold">Emergency</h3>
        <p className="mt-2 text-sm">Send SOS to trusted contacts and emergency services.</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-slate-200 rounded">Close</button>
        </div>
      </div>
    </div>
  )
}
