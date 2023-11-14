import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="h-40 bg-header grid place-items-center">
      <div className="w-fit py-2 px-4 border-4 rounded-xl border-background grid place-items-center">
        <Link to="/signup">
          <span className="text-background text-xl">Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
