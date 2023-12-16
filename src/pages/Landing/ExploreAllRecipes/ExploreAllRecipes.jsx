import React from 'react'
import arrow from '../../../assets/icons/arrow.svg'
import loading from '../../../assets/icons/loading.gif'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function ExploreAllRecipes() {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    searchRecipes()
  }, [])

  const searchRecipes = async () => {
    setIsLoading(true)
    var randOffset = Math.round(Math.random() * 800)
    const data = await getVegRecipes(
      { offset: randOffset, sort: 'popularity' },
      10,
    )
    setRecipes(data.results)
    setIsLoading(false)
  }

  return (
    <div className="p-8 pb-4 sm:px-16 sm:py-12 lg:py-20 lg:px-40 xl:px-32 2xl:px-48 3xl:px-80 3xl:py-28 bg-background">
      <h1 className="md:ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-body-bold ">
        Explore delicious vegetarian recipes
      </h1>

      {/* Recipes */}
      {isLoading ? (
        <div className="grid place-items-center w-full h-[27.5rem] sm:h-[19.25rem] md:h-[27.25rem] lg:h-[15.5rem]">
          <img src={loading} className="w-10" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:px-4 lg:grid-cols-4 lg:overflow-hidden lg:h-40 xl:h-fit xl:grid-cols-6 md:justify-items-center md:items-start mt-6 md:mt-12 xl:mt-16">
            {recipes?.slice(0, 6).map((item) => (
              <RecipeCard
                key={item.id}
                backgroundColor="bg-background-alt"
                headerTextColor="text-highlight-bright"
                recipeImage={item.image}
                recipeName={item.title}
                recipeId={item.id}
                classNames="lg:h-40 xl:h-44 2xl:h-56 3xl:h-72"
              />
            ))}
          </div>

          <div className="mt-4 md:mt-8 lg:mt-6 text-highlight-alt text-right md:mr-8 text-xs md:text-base lg:text-lg 2xl:text-xl">
            <span>Find Recipes Now</span>
            <img
              src={arrow}
              className="w-3 h-3 md:w-4 md:h-4 inline ml-1 -mt-[0.1rem]"
            />
          </div>
        </>
      )}
    </div>
  )
}
