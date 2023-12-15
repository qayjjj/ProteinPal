import React, { useState, useRef } from 'react'
import dot from '../../../assets/icons/dot.svg'
import search from '../../../assets/icons/search.svg'
import edit from '../../../assets/icons/edit.svg'
import NutritionFacts from '../../../components/NutritionFacts/NutritionFacts'
import SearchResults from './SearchResults/SearchResults'
import Advanced from './Advanced/Advanced'
import { getIngredientInformation, getIngredients } from '../../../callApi'
import { auth, db } from '../../../Firebase'
import { collection, addDoc } from 'firebase/firestore'
import convert from 'convert-units';

const Content = () => {
  const [name, setName] = useState('New Recipe')
  const [searchValue, setSearchValue] = useState('')
  const [nutritionData, setNutritionData] = useState([])
  const [ingredientList, setIngredientList] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState(null)
  const [ingredientUnits, setIngredientUnits] = useState([])
  const [servingRatio, setServingRatio] = useState([])
  const [nutrients, setNutrients] = useState([]);
  // Advanced state
  const [servingAmount, setServingAmount] = useState(null)
  const [servingUnit, setServingUnit] = useState('g')
  const [weightAmount, setWeightAmount] = useState(1)
  const [weightUnit, setWeightUnit] = useState('g')
  const [servingCount, setServingCount] = useState(1)
  const [servingType, setServingType] = useState('count')

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
        const data = await getIngredients(searchValue)
        setSearchResults(data?.results)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error processing your request, try again shortly.')
      }
    }
  }
  const handleSelectIngredient = async (id) => {
    const data = await getIngredientInformation(id)
    console.log('Data', data)
    setIngredientUnits(data?.possibleUnits)
  }

  const handleCalculateNewIngredient = async () => {
    const data = await getIngredientInformation(
      selectedIngredient.id,
      selectedIngredient.amount,
      selectedIngredient.unit,
    )
    parseNutritionData(data)
    const ingredientString =
      selectedIngredient.name +
      ' ' +
      selectedIngredient.amount +
      selectedIngredient.unit
    setIngredientList((prev) => [...prev, ingredientString])
    setSelectedIngredient({})
    setSearchValue('')
    setSearchResults([])
  }

  const compiledNutritionData = useRef({
    calories: { amount: [] },
    fat: { amount: [], percentOfDailyNeeds: [] },
    satFat: { amount: [], percentOfDailyNeeds: [] },
    transFat: { amount: [], percentOfDailyNeeds: [] },
    chol: { amount: [], percentOfDailyNeeds: [] },
    sodium: { amount: [], percentOfDailyNeeds: [] },
    carb: { amount: [], percentOfDailyNeeds: [] },
    fiber: { amount: [], percentOfDailyNeeds: [] },
    sugar: { amount: [], percentOfDailyNeeds: [] },
    protein: { amount: [], percentOfDailyNeeds: [] },
    vitD: { amount: [], percentOfDailyNeeds: [] },
    calcium: { amount: [], percentOfDailyNeeds: [] },
    iron: { amount: [], percentOfDailyNeeds: [] },
    potassium: { amount: [], percentOfDailyNeeds: [] },
  })

  const calculateNutritionPerServing = (
    nutrients,
    nutrition,
    nutritionLabel,
  ) => {
    const originalAmount =
      nutrients.find((nutrient) => nutrient.name === nutritionLabel)?.amount ??
      null

    // console.log('og', originalAmount)
    const originalPercentOfDailyNeeds =
      nutrients.find((nutrient) => nutrient.name === nutritionLabel)
        ?.percentOfDailyNeeds ?? null


    compiledNutritionData.current[nutrition].amount.push(
      originalAmount && originalAmount,
    )
    compiledNutritionData.current[nutrition].percentOfDailyNeeds?.push(
      originalPercentOfDailyNeeds &&
      originalPercentOfDailyNeeds,
    )

    if (servingType === 'count') {
      setServingRatio(servingCount);
    } else {
      console.log(weightUnit);
      console.log(servingUnit);
      const weightUnitToUse = weightUnit === 'ml' ? 'g' : weightUnit;
      const servingUnitToUse = servingUnit === 'ml' ? 'g' : servingUnit;
      
      let convertedAmount = convert(weightAmount).from(weightUnitToUse).to(servingUnitToUse); // convert weight ammount to serving units
      let calcCount = convertedAmount / servingAmount; // calculate 1 serving using standardized units
      setServingRatio(calcCount);
    }
  }

  const parseNutritionData = (data) => {
    const nutrients = data?.nutrition?.nutrients

    calculateNutritionPerServing(nutrients, 'calories', 'Calories')
    calculateNutritionPerServing(nutrients, 'fat', 'Fat')
    calculateNutritionPerServing(nutrients, 'satFat', 'Saturated Fat')
    calculateNutritionPerServing(nutrients, 'transFat', 'Trans Fat')
    calculateNutritionPerServing(nutrients, 'chol', 'Cholesterol')
    calculateNutritionPerServing(nutrients, 'sodium', 'Sodium')
    calculateNutritionPerServing(nutrients, 'carb', 'Carbohydrates')
    calculateNutritionPerServing(nutrients, 'fiber', 'Fiber')
    calculateNutritionPerServing(nutrients, 'sugar', 'Sugar')
    calculateNutritionPerServing(nutrients, 'protein', 'Protein')
    calculateNutritionPerServing(nutrients, 'vitD', 'Vitamin D')
    calculateNutritionPerServing(nutrients, 'calcium', 'Calcium')
    calculateNutritionPerServing(nutrients, 'iron', 'Iron')
    calculateNutritionPerServing(nutrients, 'potassium', 'Potassium')

    setNutritionData(compiledNutritionData.current)
  }

  const saveToFirebase = async () => {
    try {
      const user = auth.currentUser

      if (user) {
        const docRef = await addDoc(collection(db, user.uid), {
          nutritionData: nutritionData,
          servingRatio: servingRatio,
          createdBy: user.uid,
        })

        console.log('Document written with ID: ', docRef.id)
        alert("Successfully Saved Recipe!")
      } else {
        console.error('User not authenticated.')
      }
    } catch (error) {
      console.error('Error adding document: ', error)
      alert("We encountered an error. Please try again shortly.")
    }
  }

  return (
    <div className="py-28 px-36">
      <div className="w-full flex gap-6">
        <div className="flex-1">
          {/* Recipe Name */}
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
          <div className="mt-4 border-[1px] border-header h-12 rounded-md flex items-center p-2">
            <img src={search} alt="Search Icon" className="w-6 h-6" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full outline-none ml-2 bg-background"
              placeholder="Enter an ingredient name then press Enter"
            />
          </div>

          <SearchResults
            searchResults={searchResults}
            selectedIngredient={selectedIngredient}
            setSelectedIngredient={setSelectedIngredient}
            handleSelectIngredient={handleSelectIngredient}
            handleCalculateNewIngredient={handleCalculateNewIngredient}
            ingredientUnits={ingredientUnits}
          />
          <Advanced
            weightAmount={weightAmount}
            setWeightAmount={setWeightAmount}
            weightUnit={weightUnit}
            setWeightUnit={setWeightUnit}
            servingAmount={servingAmount}
            setServingAmount={setServingAmount}
            servingUnit={servingUnit}
            setServingUnit={setServingUnit}
            servingCount={servingCount}
            setServingCount={setServingCount}
            servingType={servingType}
            setServingType={setServingType}
            nutrients={nutrients}
            calculateNutritionPerServing={calculateNutritionPerServing}
          />
        </div>
        <NutritionFacts nutritionData={nutritionData} servingRatio={servingRatio} />
      </div>
      <div className="w-1/3 flex gap-2">
        <button class="w-1/2 border-[1px] border-background-bright text-header p-2 rounded-lg hover:shadow-md">
          Cancel
        </button>
        <button
          class="w-1/2 bg-background-bright text-header p-2 rounded-lg hover:shadow-md"
          onClick={saveToFirebase}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Content
