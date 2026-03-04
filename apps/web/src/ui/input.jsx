import React from 'react'
export default function Input(props){
  return <input {...props} className={(props.className||'')+" border p-2 rounded w-full"} />
}
