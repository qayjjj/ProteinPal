import React, { useState } from 'react'
import dot from '../../../assets/icons/dot.svg'
import search from '../../../assets/icons/search.svg'
import edit from '../../../assets/icons/edit.svg'
import SearchResults from './SearchResults/SearchResults'
import Advanced from './Advanced/Advanced'
import { getIngredients } from '../../../callApi'

const Details = () => {
  const [name, setName] = useState('New Recipe')
  const [inputValue, setInputValue] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [ingredientList, setIngredientList] = useState([]);

  const handleNameChange = (e) => {
    let newName = ''
    while (newName === '') {
      newName = prompt('Enter recipe name')
      if (newName === '') {
        alert('Please enter a name!')
      }
    }
    setName(newName)
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await getIngredients(inputValue);
        handleData(data);
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error processing your request, try again shortly.');
      }
    }
  };

  const handleData = (data) => {
    if (data && data.length > 0 && data[0].id) {
      setNutritionData(data);

      // add ingredient to list
      if (inputValue.trim() !== '') {
        setIngredientList(prevList => [...prevList, inputValue]);
        setInputValue('');
      }
    } else if (inputValue) {
      alert(`Was not able to find ingredient "${inputValue}".`);
      setNutritionData(null);
    }
  }

  return (
    <div className="grow">
      <div className="text-5xl font-bold text-header flex">
        <h1>{name}</h1>

        <img
          src={edit}
          className="w-8 cursor-pointer ml-4"
          onClick={handleNameChange}
        />
      </div>

      {/* Ingredients */}
      <div className="mt-4 text-body-bold">
        {ingredientList.map((item, index) => {
          return (
            <span className="leading-10 whitespace-nowrap mr-6">
              <img src={dot} className="px-0 w-6 h-6 inline" />
              <span className="whitespace-nowrap">{item}</span>
            </span>
          )
        })}
      </div>

      {/* Search */}
      <div className="mt-8 border-[1px] border-header h-12 rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full outline-none ml-2 bg-background"
          placeholder="Enter an ingredient and it's amount then press Enter"
        />
      </div>

      {nutritionData && (
        <div>
          {/* Display nutritional information here */}
          <p>Name: {nutritionData[0].id}</p>
        </div>
      )}

      {/* <SearchResults /> */}
      <Advanced />
    </div>
  )
}

export default Details;