import React from 'react'
import search from '../../../assets/icons/search.svg'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function BrowseIngredients() {
  const [recipes, setRecipes] = useState([])
  const [searchValue, setSearchValue] = useState('tomato, blue cheese')

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const searchRecipes = async () => {
    const data = await getVegRecipes({ includeIngredients: searchValue }, 10)
    setRecipes(data.results)
  }

  useEffect(() => {
    searchRecipes()
  }, [searchValue])

  return (
    <div className="pt-8 pb-2 px-8 md:py-16 md:px-40 bg-background align-center">
      <h1 className="text-center text-lg sm:text-xl md:text-4xl font-bold text-body-bold ">
        Find recipes using the ingredients you already have
      </h1>

      <div className="md:mx-auto mt-4 md:mt-10 border-[1px] h-8 md:h-12 w-full md:w-2/3 rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-5 h-5 md:w-6 md:h-6" />
        <input
          type="text"
          className="w-full outline-none bg-background ml-2 text-xs md:text-base"
          value={searchValue}
        />
      </div>

      {/* Recipes */}
      {/* <div className="w-full grid justify-items-center relative mt-12">
        <Carousel
          backgroundColor="bg-body-bold"
          headerTextColor="text-background-alt"
          bodyTextColor="text-background-alt"
          recipes={carouselRecipes}
        />
      </div> */}

      <div className="grid grid-cols-2 gap-3 md:gap-0 md:w-11/12 md:mx-auto md:flex md:justify-between md:items-start mt-6 md:mt-12">
        {recipes?.slice(0, 4).map((item) => (
          <RecipeCard
            key={item.id}
            backgroundColor="bg-body-bold"
            headerTextColor="text-background-alt"
            recipeImage={item.image}
            recipeName={item.title}
            recipeId={item.id}
            classNames="h-full"
          />
        ))}
      </div>
    </div>
  )
}
