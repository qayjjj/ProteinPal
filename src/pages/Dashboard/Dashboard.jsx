import React from 'react'
import MyRecipes from './MyRecipes/MyRecipes'
import SavedRecipes from './SavedRecipes/SavedRecipes'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <MyRecipes />
      <SavedRecipes />
    </div>
  )
}
