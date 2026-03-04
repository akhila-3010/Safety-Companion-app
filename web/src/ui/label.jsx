import React from 'react'
export default function Label({children, ...props}){
  return <label {...props} className="block text-sm font-medium mb-1">{children}</label>
}
