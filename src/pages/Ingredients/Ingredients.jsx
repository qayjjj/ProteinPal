import React from 'react'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import IngredientCard from '../../components/IngredientCard/IngredientCard'
import search from '../../assets/icons/search.svg'
import { getIngredientInformation, getIngredients } from '../../callApi'

export default function Ingredients() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const fetchData = async () => {
    try {
      const data = await getIngredients(searchValue, 100);
      setSearchResults(data.results);
      console.log(data)

    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('There was an error processing your request, try again shortly.')
    }
  };

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(searchValue);
    fetchData()
    setSearchValue('')
  }

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
  }

  return (
    <div className="bg-background">
      <Navigation/>
      <h1 className="text-center text-4xl font-bold text-header mt-10">
        Search Ingredient Database
      </h1>

      <div className="mx-auto mt-10 border-[1px] h-12 w-2/3 bg-background rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="w-full outline-none bg-background ml-2"
            value={searchValue}
            onChange={(e) => updateSearch(e)}
          />
        </form>
      </div>
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {searchResults?.map((item) => (
          <IngredientCard
          name={item.name}
          image={item.image}
          backgroundColor="bg-background-bright"
          headerTextColor="text-background"
          bodyTextColor="text-body-bold"
          />
        ))}
      </div>
    </div>
  )
}
