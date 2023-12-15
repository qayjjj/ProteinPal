import React from 'react'
import {useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import IngredientCard from '../../components/IngredientCard/IngredientCard'
import search from '../../assets/icons/search.svg'
import { getIngredientInformation, getIngredients } from '../../callApi'
import IngredientModal from './IngredientModal/IngredientModal'

export default function Ingredients() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})

  const [ingredientInfo, setIngredientInfo] = useState({})
  const [ingredientNutrients, setIngredientNutrients] = useState([])
  const [ingredientUnit, setIngredientUnit] = useState('')

  const [showModal, setShowModal] = useState(false);

  const fetchSearchData = async () => {
    try {
      const data = await getIngredients(searchValue, 100);
      setSearchResults(data.results);
      console.log(data)

    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('There was an error processing your request, try again shortly.')
    }
  };

  const fetchSingleIngredientData = async (id) => {
    try {
      // Try getting ingredient info for 100g serving
      const ingredientData = await getIngredientInformation(id, 100, "g");
      setIngredientInfo(ingredientData);
      setIngredientNutrients(ingredientData.nutrition?.nutrients);
      setIngredientUnit("g")

    } catch (error) {
      // If the ingredient does not have g in the measure, find out which measures it has
      try {
        const ingredientData = await getIngredientInformation(id);
        setIngredientInfo(ingredientData);
        const unit = ingredientData.possibleUnits?.[0]
        setIngredientUnit(unit)

        const ingredientDataWithNutrition = await getIngredientInformation(id, 10, unit);
        setIngredientNutrients(ingredientDataWithNutrition.nutrition?.nutrients);
      
      } catch (error) {
        console.error('Error fetching search results:', error);
        alert('There was an error processing your request, try again shortly.')
      }

    }
  }

  const handleCardOnClick = (item) => {
    console.log(item)
    setSelectedIngredient({ id: item.id, name: item.name, image: item.image })
    setShowModal(true);
    fetchSingleIngredientData(item.id)
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIngredient({})
  }

  const handleSearch = (event) => {
    event.preventDefault()
    fetchSearchData()
    setSearchValue('')
  }

  const updateSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="bg-background">
      <Navigation/>

      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-header mt-10">
        Search Ingredient Database
      </h1>

      {/* Search Bar */}
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

      {/* Search Results */}
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {searchResults?.map((item) => (
          <IngredientCard
          name={item.name}
          image={item.image}
          backgroundColor="bg-background-bright"
          headerTextColor="text-background"
          bodyTextColor="text-body-bold"
          onClick={() => handleCardOnClick(item)}
          />
        ))}
      </div>
      
      {/* Modal */}
      <IngredientModal
        isOpen={showModal}
        closeModal={handleCloseModal}
        ingredientData={ingredientInfo}
        nutrients={ingredientNutrients}
        image={ingredientInfo.image}
        ingredientUnit={ingredientUnit}
      />

    </div>
  )
}
