import React from 'react'
import CompanionCard from '../components/CompanionCard'

const sample = [{id:1,name:'Asha',languages:['English','Hindi'],hourly_rate:15},{id:2,name:'Ravi',languages:['English'],hourly_rate:12}]

export default function CompanionBrowsePage(){
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      <h2 className="text-xl font-semibold">Browse companions</h2>
      <div className="grid gap-3">
        {sample.map(c=> <CompanionCard key={c.id} companion={c} />)}
      </div>
    </div>
  )
}
