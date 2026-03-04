import React from 'react'
import { useParams } from 'react-router-dom'

export default function CompanionDetailPage(){
  const { id } = useParams()
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold">Companion detail — {id}</h2>
      <p className="mt-2 text-slate-600">Profile, verification badge, languages, reviews.</p>
    </div>
  )
}
