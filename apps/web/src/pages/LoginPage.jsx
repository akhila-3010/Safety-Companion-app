import React from 'react'
import Input from '../ui/input'

export default function LoginPage(){
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Log in</h2>
      <div className="mt-4 space-y-3">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Log in</button>
      </div>
    </div>
  )
}
