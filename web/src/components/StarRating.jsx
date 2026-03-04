import React from 'react'

export default function StarRating({value=0,onChange}){
  const stars=[1,2,3,4,5]
  return (
    <div className="flex gap-1">
      {stars.map(s=> (
        <button key={s} onClick={()=>onChange&&onChange(s)} className={s<=value? 'text-yellow-500':'text-slate-300'}>
          ★
        </button>
      ))}
    </div>
  )
}
