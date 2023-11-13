import React from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import arrow from '../../../assets/icons/arrow.svg'

const list = [1, 2, 3, 4]

export default function ExploreAllRecipes() {
  return (
    <div className="py-16 px-40 bg-background">
      <h1 className="ml-8 text-4xl font-bold text-body-bold ">
        Explore delicious, high-protein recipes
      </h1>

      {/* Recipes */}
      <div className="flex justify-between mt-12">
        {list.map((item, key) => (
          <RecipeCard />
        ))}
      </div>

      <p className="mt-8 text-highlight-alt text-right">
        Find Recipes Now
        <img src={arrow} className="w-4 h-4 inline" />
      </p>
    </div>
  )
}
