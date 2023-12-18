import React, { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import addIcon from '../../../assets/icons/add.svg'
import loading from '../../../assets/icons/loading.gif'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../../../Firebase'
import { getRecipeDetails } from '../../../callApi'
import { Link } from 'react-router-dom'

export default function SavedRecipes() {
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes()
  }, [auth.currentUser])

  const fetchRecipes = async () => {
    setIsLoading(true)
    const user = auth.currentUser
    if (user) {
      const firestore = getFirestore()
      const savedRecipesRef = doc(firestore, user.uid, 'savedRecipes')
      const savedRecipesSnap = await getDoc(savedRecipesRef)

      if (savedRecipesSnap.exists()) {
        const savedRecipesData = savedRecipesSnap.data()
        const recipesData = []
        console.log(savedRecipesData)

        for (const id of savedRecipesData.recipeIds) {
          const data = await getRecipeDetails(id)
          recipesData.push(data)
        }
        setRecipes(recipesData)
      }
    }
    setIsLoading(false)
  }
  return (
    <div className="mt-12 md:mt-16 md:mt-24 xl:mt-32">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-header">
          Saved Recipes
        </h2>
        <button className="flex items-center">
          <Link to="/recipes" className="flex items-center">
            <img src={addIcon} className="w-6 md:w-8 xl:w-10 2xl:w-12" />
            <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold ml-2 xl:ml-4 text-background-bright">
              Add
            </span>
          </Link>
        </button>
      </div>
      <div
        className={`shadow-inner rounded-lg overflow-y-auto p-1 mt-6 xl:mt-10 h-60 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[34rem] w-full bg-background-alt p-[0.05rem] lg:p-4 grid ${
          recipes.length !== 0 &&
          'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6'
        }`}
      >
        {!isLoading && recipes.length === 0 ? (
          <p className="place-self-center text-background-bright text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
            Save a recipe and find it here!
          </p>
        ) : isLoading ? (
          <div className="grid place-items-center w-full h-full">
            <img src={loading} className="w-10" alt="Loading" />
          </div>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard
              backgroundColor="bg-background-alt"
              headerTextColor="text-highlight-bright"
              recipeImage={recipe.image ?? null}
              recipeName={recipe.title}
              recipeId={recipe.id}
              classNames="h-fit"
            />
          ))
        )}
      </div>
    </div>
  )
}
