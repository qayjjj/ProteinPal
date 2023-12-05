import React from 'react'
import MyRecipes from './MyRecipes/MyRecipes'
import SavedRecipes from './SavedRecipes/SavedRecipes'
import Navigation from '../../components/Navigation/Navigation'

export default function Dashboard() {
  return (
    <div className="bg-background">
      <Navigation />
      <div className="py-28 px-56">
        <h1 className="text-4xl font-bold text-header">Dashboard</h1>
        <MyRecipes />
        <SavedRecipes />
      </div>
    </div>
  )
}
