import React, { useState } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import addIcon from '../../../assets/icons/add.svg'

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([1, 2])

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-header">My Recipes</h2>
        <button className="flex items-center">
          <img src={addIcon} className="w-8" />
          <span className="text-2xl font-bold ml-2 text-background-bright">
            Add
          </span>
        </button>
      </div>
      <div
        className={`rounded-lg mt-6 min-h-[24rem] w-full bg-background-alt grid ${
          recipes.length !== 0 && 'grid-cols-4'
        }`}
      >
        {recipes.length === 0 ? (
          <p className="place-self-center text-background-bright">
            Nothing to see here
          </p>
        ) : (
          recipes.map(() => (
            <RecipeCard
              backgroundColor="bg-background-alt"
              headerTextColor="text-highlight-bright"
              bodyTextColor="text-body-bold"
              // recipeImage={item.image}
              recipeName="Recipe Name"
              // recipeId={item.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
