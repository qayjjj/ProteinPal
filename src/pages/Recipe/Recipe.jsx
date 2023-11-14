import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Overview from './Overview/Overview'
import Details from './Details/Details'

export default function Recipe() {
  return (
    <div>
      <Navigation />
      <div className="py-28 px-72">
        <Overview />
        <Details />
      </div>
    </div>
  )
}
