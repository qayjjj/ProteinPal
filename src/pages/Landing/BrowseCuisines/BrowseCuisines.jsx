import React from 'react'
import search from '../../../assets/icons/search.svg'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function BrowseCuisines() {
  const [recipes, setRecipes] = useState([])
  const [searchValue, setSearchValue] = useState('korean')

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const searchRecipes = async () => {
    const data = await getVegRecipes({ cuisine: searchValue }, 10)
    setRecipes(data.results)
  }

  useEffect(() => {
    searchRecipes()
  }, [searchValue])

  return (
    <div className="p-8 md:py-16 md:px-40 bg-background">
      <h1 className="text-center text-lg sm:text-xl md:text-4xl font-bold text-body-bold">
        Browse recipes based on your favorite cuisines
      </h1>

      <div className="md:mx-auto mt-4 md:mt-10 border-[1px] h-8 md:h-12 w-full md:w-2/3 rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-5 h-5 md:w-6 md:h-6" />
        <input
          type="text"
          className="w-full outline-none bg-background ml-2 text-xs md:text-base"
          value={searchValue}
          onChange={(e) => updateSearch(e)}
        />
      </div>
      {/* <div className="w-full grid justify-items-center relative mt-12">
        <Carousel
          backgroundColor="bg-background-alt"
          headerTextColor="text-background-bright"
          bodyTextColor="text-body-bold"
          recipes={carouselRecipes}
        />
      </div> */}

      <div className="grid grid-cols-2 gap-3 md:gap-0 md:w-11/12 md:mx-auto md:flex md:justify-between md:items-start mt-6 md:mt-12">
        {recipes?.slice(0, 4).map((item) => (
          <RecipeCard
            key={item.id}
            backgroundColor="bg-background-alt"
            headerTextColor="text-background-bright"
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
