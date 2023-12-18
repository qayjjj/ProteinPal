import React from 'react'
import { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import IngredientCard from '../../components/IngredientCard/IngredientCard'
import search from '../../assets/icons/search.svg'
import { getIngredientInformation, getIngredients } from '../../callApi'
import IngredientModal from './IngredientModal/IngredientModal'
import loading from '../../assets/icons/loading.gif'

export default function Ingredients() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [searched, setSearched] = useState(false)

  const [ingredientInfo, setIngredientInfo] = useState({})
  const [ingredientNutrients, setIngredientNutrients] = useState([])
  const [ingredientUnit, setIngredientUnit] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingModal, setIsLoadingModal] = useState(false)

  const fetchSearchData = async () => {
    setIsLoading(true)
    try {
      const data = await getIngredients(searchValue, 100)
      setSearchResults(data.results)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching search results:', error)
      alert('There was an error processing your request, try again shortly.')
    }
  }

  const fetchSingleIngredientData = async (id) => {
    setIsLoadingModal(true)
    try {
      // Try getting ingredient info for 100g serving
      const ingredientData = await getIngredientInformation(id, 100, 'g')
      setIngredientInfo(ingredientData)
      setIngredientNutrients(ingredientData.nutrition?.nutrients)
      setIngredientUnit('g')
      setIsLoadingModal(false)
    } catch (error) {
      // If the ingredient does not have g in the measure, find out which measures it has
      try {
        const ingredientData = await getIngredientInformation(id)
        setIngredientInfo(ingredientData)
        const unit = ingredientData.possibleUnits?.[0]
        setIngredientUnit(unit)

        const ingredientDataWithNutrition = await getIngredientInformation(
          id,
          10,
          unit,
        )
        setIngredientNutrients(ingredientDataWithNutrition.nutrition?.nutrients)
        setIsLoadingModal(false)
      } catch (error) {
        console.error('Error fetching search results:', error)
        alert('There was an error processing your request, try again shortly.')
      }
    }
  }
  console.log(isLoadingModal)
  const handleCardOnClick = (item) => {
    setSelectedIngredient({ id: item.id, name: item.name, image: item.image })
    setShowModal(true)
    fetchSingleIngredientData(item.id)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedIngredient({})
  }

  const handleSearch = (event) => {
    event.preventDefault()
    fetchSearchData()
    setSearched(true)
  }

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
    setSearched(false)
  }

  return (
    <div className="bg-background h-screen w-screen">
      <Navigation />
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-header mt-10 lg:mt-16">
        Search Ingredients
      </h1>
      {/* Title */}
      {searchValue && searchResults.length > 0 && searched && !isLoading && (
        <h1 className="m-auto mt-2 lg:mt-4 2xl:mt-8 md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-body-bold text-center">
          results for <b>{searchValue}</b>
        </h1>
      )}

      {/* Search Bar */}
      <div className="mx-auto mt-6 lg:mt-10 2xl:mt-12 border-[1px] h-8 lg:h-12 w-3/4 lg:w-2/3 2xl:border-2 bg-background rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <form className="w-full" onSubmit={handleSearch}>
          <input
            type="text"
            className="w-full outline-none bg-background ml-2 text-xs lg:text-sm 2xl:text-base 3xl:text-lg"
            value={searchValue}
            onChange={(e) => updateSearch(e)}
          />
        </form>
      </div>

      {!searchValue && searchResults.length < 1 && (
        <h2 className="text-center text-xs sm:text-sm xl:text-base 2xl:text-xl text-body mt-2">
          Enter ingredient keyword
        </h2>
      )}

      {searchValue && searchResults.length === 0 && !isLoading && searched && (
        <h2 className="text-center text-sm sm:text-sm md:text-base xl:text-base 2xl:text-lg 3xl:text-lg text-body-bold mt-10 lg:mt-16">
          No results found for <b>{searchValue}</b>
        </h2>
      )}

      {/* Search Results */}
      {isLoading ? (
        <div className="grid place-items-center w-full h-[30rem] lg:h-[40rem]">
          <img src={loading} className="w-8" />
        </div>
      ) : (
        <div className="w-full py-8 px-10 lg:py-12 lg:px-20 2xl:px-32 3xl:px-60 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4">
          {searchResults?.map((item) => (
            <IngredientCard
              name={item.name}
              image={item.image}
              backgroundColor="bg-background-bright"
              headerTextColor="text-background"
              bodyTextColor="text-body-bold"
              classNames="ingredients-page-item"
              onClick={() => handleCardOnClick(item)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <IngredientModal
        name={selectedIngredient.name}
        isOpen={showModal}
        closeModal={handleCloseModal}
        nutrients={ingredientNutrients}
        ingredientUnit={ingredientUnit}
        isLoadingModal={isLoadingModal}
      />
    </div>
  )
}
