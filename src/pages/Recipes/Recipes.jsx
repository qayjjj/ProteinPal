import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

const list = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Recipes() {
  return (
    <div className="bg-background">
      <Navigation />
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {list.map((item) => (
          <RecipeCard
            backgroundColor="bg-background-alt"
            headerTextColor="text-header"
            bodyTextColor="text-header"
          />
        ))}
      </div>
    </div>
  )
}
