import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(){
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Find verified safety companions</h1>
      <p className="mt-2 text-slate-600">Book short-duration accompaniment for safer travel.</p>
      <div className="mt-4">
        <Link to="/browse" className="px-4 py-2 bg-blue-600 text-white rounded">Browse companions</Link>
      </div>
    </div>
  )
}
