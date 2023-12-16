import React from 'react'
import search from '../../../assets/icons/search.svg'
import loading from '../../../assets/icons/loading.gif'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function BrowseIngredients() {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [searchValue, setSearchValue] = useState('tomato, blue cheese')

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const searchRecipes = async () => {
    setIsLoading(true)
    const data = await getVegRecipes({ includeIngredients: searchValue }, 10)
    setRecipes(data?.results)
    setIsLoading(false)
  }

  useEffect(() => {
    searchRecipes()
  }, [searchValue])
  return (
    <div className="p-8 pb-4 sm:px-16 sm:py-12 lg:py-10 lg:px-40 xl:px-32 xl:pb-16 2xl:px-48 3xl:px-80 3xl:py-28 bg-background align-center">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-body-bold ">
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
      {isLoading ? (
        <div className="grid place-items-center w-full h-[27.5rem] sm:h-[19.25rem] md:h-[27.25rem] lg:h-[15.5rem]">
          <img src={loading} className="w-10" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:px-4 lg:grid-cols-4 lg:overflow-hidden lg:h-40 xl:h-fit xl:grid-cols-6 md:justify-items-center md:items-start mt-6 md:mt-12 lg:mt-10">
          {recipes?.slice(0, 6).map((item) => (
            <RecipeCard
              key={item.id}
              backgroundColor="bg-body-bold"
              headerTextColor="text-background-alt"
              recipeImage={item.image}
              recipeName={item.title}
              recipeId={item.id}
              classNames="lg:h-40 xl:h-fit"
            />
          ))}
        </div>
      )}
    </div>
  )
}
