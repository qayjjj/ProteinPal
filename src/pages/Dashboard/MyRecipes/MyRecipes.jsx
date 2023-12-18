import React, { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import addIcon from '../../../assets/icons/add.svg'
import loading from '../../../assets/icons/loading.gif'
import { Link } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../../../Firebase'

export default function MyRecipes() {
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState([])
  const [id, setId] = useState("")

  useEffect(() => {
    fetchRecipes()
  }, [auth.currentUser])

  const fetchRecipes = async () => {
    setIsLoading(true)
    const user = auth.currentUser
    if (user) {
      const firestore = getFirestore()
      const collectionsDocRef = doc(firestore, user.uid, 'collections')
      const collectionsDocSnap = await getDoc(collectionsDocRef)

      if (collectionsDocSnap.exists()) {
        const collectionsData = collectionsDocSnap.data()
        // console.log(collectionsData.collectionNames);
        const recipesData = []

        for (const coll of collectionsData.collectionNames) {
          const recipeRef = doc(firestore, user.uid, coll)
          const recipeSnap = await getDoc(recipeRef)
          if (recipeSnap.exists()) {
            recipesData.push([recipeSnap.data(), coll])
          }
        }
        setRecipes(recipesData)
      }
    }
    setIsLoading(false)
  }

  console.log(recipes)
  return (
    <div className="mt-10 lg:mt-16 xl:mt-20">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-header">
          My Recipes
        </h2>
        <button className="flex items-center">
          <Link to="/create" className="flex items-center">
            <img
              src={addIcon}
              alt="Add"
              className="w-6 md:w-8 xl:w-10 2xl:w-12"
            />
            <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold ml-2 xl:ml-4 text-background-bright">
              Add
            </span>
          </Link>
        </button>
      </div>
      <div
        className={`shadow-inner rounded-lg mt-6 xl:mt-10 h-60 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[34rem] w-full p-4 bg-background-alt ${isLoading ? 'grid' : 'overflow-y-auto'
          }`}
      >
        <div
          className={`w-full ${isLoading
              ? 'grid'
              : recipes.length < 1
                ? 'grid h-full'
                : 'flex flex-wrap gap-2'
            } `}
        >
          {isLoading ? (
            <div className="grid place-items-center w-full h-56 md:h-72 lg:h-80 xl:h-[29rem] 2xl:h-[33rem] ">
              <img src={loading} className="w-10" alt="Loading" />
            </div>
          ) : recipes.length === 0 ? (
            <div className="grid place-items-center text-background-bright">
              <span>You don't have any recipes yet!</span>
            </div>
          ) : (
            recipes.map((recipe) => (
              <Link to={`/customrecipe?id=${recipe[1]}`}>
                <div className="border-[1px] h-8 md:h-10 flex items-center rounded-lg py-1 px-2 md:px-3 xl:h-12 xl:py-2 xl:px-4 bg-background-bright text-background hover:shadow-lg hover:cursor-pointer text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl">
                  {recipe[0].recipeName}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
