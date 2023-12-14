import React from 'react'
import arrow from '../../../assets/icons/arrow.svg'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function ExploreAllRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    searchRecipes()
  }, [])

  const searchRecipes = async () => {
    var randOffset = Math.round(Math.random() * 800)
    const data = await getVegRecipes(
      { offset: randOffset, sort: 'popularity' },
      10,
    )
    setRecipes(data.results)
  }

  return (
    <div className="p-8 pb-4 md:py-16 md:px-40 bg-background">
      <h1 className="md:ml-8 text-xl md:text-4xl font-bold text-body-bold ">
        Explore delicious vegetarian recipes
      </h1>

      {/* Recipes */}

      <div className="grid grid-cols-2 gap-3 md:gap-0 md:w-11/12 md:mx-auto md:flex md:justify-between md:items-start mt-6 md:mt-12">
        {/* <Carousel
          backgroundColor="bg-background-alt"
          headerTextColor="text-highlight-bright"
          bodyTextColor="text-body-bold"
          recipes={carouselRecipes}
        /> */}
        {recipes?.slice(0, 4).map((item) => (
          <RecipeCard
            key={item.id}
            backgroundColor="bg-background-alt"
            headerTextColor="text-highlight-bright"
            recipeImage={item.image}
            recipeName={item.title}
            recipeId={item.id}
            classNames="h-full"
          />
        ))}
      </div>

      <div className="mt-4 md:mt-8 text-highlight-alt text-right mr- md:mr-8 text-xs md:text-base">
        <span>Find Recipes Now</span>
        <img
          src={arrow}
          className="w-3 h-3 md:w-4 md:h-4 inline ml-1 -mt-[0.1rem]"
        />
      </div>
    </div>
  )
}
