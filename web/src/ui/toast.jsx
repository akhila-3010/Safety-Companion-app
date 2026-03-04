import React from 'react'

export default function Toast({message}){
  if(!message) return null
  return (
    <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded">{message}</div>
  )
}
import React from 'react'
export default function Toast({children}){ return <div className="px-3 py-2 bg-slate-800 text-white rounded">{children}</div> }
