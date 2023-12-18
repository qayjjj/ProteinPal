import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { getVegRecipes } from '../../callApi'
import search from '../../assets/icons/search.svg'
import loading from '../../assets/icons/loading.gif'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [keyword, setKeyword] = useState('')
  const location = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    searchRecipes()
  }, [location.search])

  const searchRecipes = async () => {
    setIsLoading(true)
    try {
      const queryParams = new URLSearchParams(location.search)
      const userKeyword = queryParams.get('q')
      setKeyword(userKeyword)

      if (userKeyword) {
        const data = await getVegRecipes({ query: userKeyword })
        setRecipes(data.results)
        setIsLoading(false)
      } else {
        var randOffset = Math.round(Math.random() * 800)
        const data = await getVegRecipes({ offset: randOffset })
        setRecipes(data.results)
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    navigate(`/recipes?q=${searchValue}`)
    setSearchValue('')
  }

  return (
    <div className="bg-background">
      <Navigation />

      <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-header mt-10 lg:mt-16">
        Search Vegetarian Recipes
      </h1>
      {keyword && recipes.length !== 0 && (
        <h1 className="m-auto mt-2 lg:mt-4 2xl:mt-8 md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-body-bold text-center">
          results for <b>{keyword}</b>
        </h1>
      )}

      <div className="mx-auto mt-6 lg:mt-10 2xl:mt-12  border-[1px] h-8 lg:h-12 w-3/4 lg:w-2/3 2xl:border-2 bg-background rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="w-full outline-none bg-background ml-2 text-xs lg:text-sm 2xl:text-base 3xl:text-lg"
            onChange={(e) => handleSearch(e)}
            value={searchValue}
          />
        </form>
      </div>
      {keyword && recipes.length === 0 && (
        <h2 className="text-center text-sm sm:text-sm md:text-base xl:text-base 2xl:text-lg 3xl:text-lg text-body-bold mt-10 lg:mt-16">
          No results found for <b>{keyword}</b>
        </h2>
      )}
      {isLoading ? (
        <div className="grid place-items-center w-full h-[30rem] lg:h-[40rem]">
          <img src={loading} className="w-8" />
        </div>
      ) : (
        <div className="w-full py-8 px-10 lg:py-12 lg:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4">
          {recipes.map((item) => (
            <RecipeCard
              backgroundColor="bg-background-alt"
              headerTextColor="text-header"
              recipeImage={item.image}
              recipeName={item.title}
              recipeId={item.id}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  )
}
