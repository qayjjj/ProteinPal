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

const   Content = () => {
  const [name, setName] = useState('New Recipe')
  const [searchValue, setSearchValue] = useState('')
  const [nutritionData, setNutritionData] = useState([])
  const [ingredientList, setIngredientList] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState(null)
  const [ingredientUnits, setIngredientUnits] = useState([])
  // Advanced state
  const [servingAmount, setServingAmount] = useState(null)
  const [servingUnit, setServingUnit] = useState(null)
  const [weightAmount, setWeightAmount] = useState(0)
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

    console.log('og', originalAmount)
    const originalPercentOfDailyNeeds =
      nutrients.find((nutrient) => nutrient.name === 'Fat')
        ?.percentOfDailyNeeds ?? null

    if (servingType === 'count') {
      compiledNutritionData.current[nutrition].amount.push(
        originalAmount && originalAmount / servingCount,
      )
      compiledNutritionData.current[nutrition].percentOfDailyNeeds?.push(
        originalPercentOfDailyNeeds &&
          originalPercentOfDailyNeeds / servingCount,
      )
      console.log('after', originalAmount / servingCount)
    } else {
      // conversion for weight after cooking + serving size
      // count = weight / serving
      compiledNutritionData.current[nutrition].amount.push(
        originalAmount && originalAmount / 4,
      ) // replace 4 with count
      compiledNutritionData.current[nutrition].percentOfDailyNeeds?.push(
        originalPercentOfDailyNeeds && originalPercentOfDailyNeeds / 4,
      ) // replace 4 with count
    }
  }

  const parseNutritionData = (data) => {
    const nutrients = data?.nutrition?.nutrients

    calculateNutritionPerServing(nutrients, 'calories', 'Calories')

    // compiledNutritionData.current.calories.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Calories')?.amount ??
    //     null,
    // )
    calculateNutritionPerServing(nutrients, 'fat', 'Fat')

    // compiledNutritionData.current.fat.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Fat')?.amount ?? null,
    // )
    // compiledNutritionData.current.fat.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Fat')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'satFat', 'Saturated Fat')

    // compiledNutritionData.current.satFat.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Saturated Fat')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.satFat.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Saturated Fat')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'transFat', 'Trans Fat')

    // compiledNutritionData.current.transFat.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Trans Fat')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.transFat.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Trans Fat')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'chol', 'Cholesterol')

    // compiledNutritionData.current.chol.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Cholesterol')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.chol.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Cholesterol')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'sodium', 'Sodium')

    // compiledNutritionData.current.sodium.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Sodium')?.amount ?? null,
    // )
    // compiledNutritionData.current.sodium.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Sodium')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'carb', 'Carbohydrates')

    // compiledNutritionData.current.carb.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Carbohydrates')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.carb.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Carbohydrates')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'fiber', 'Fiber')

    // compiledNutritionData.current.fiber.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Fiber')?.amount ?? null,
    // )
    // compiledNutritionData.current.fiber.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Fiber')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'sugar', 'Sugar')

    // compiledNutritionData.current.sugar.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Sugar')?.amount ?? null,
    // )
    // compiledNutritionData.current.sugar.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Sugar')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'protein', 'Protein')

    // compiledNutritionData.current.protein.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Protein')?.amount ?? null,
    // )
    // compiledNutritionData.current.protein.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Protein')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'vitD', 'Vitamin D')

    // compiledNutritionData.current.vitD.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Vitamin D')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.vitD.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Vitamin D')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'calcium', 'Calcium')

    // compiledNutritionData.current.calcium.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Calcium')?.amount ?? null,
    // )
    // compiledNutritionData.current.calcium.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Calcium')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'iron', 'Iron')

    // compiledNutritionData.current.iron.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Iron')?.amount ?? null,
    // )
    // compiledNutritionData.current.iron.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Iron')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    calculateNutritionPerServing(nutrients, 'potassium', 'Potassium')

    // compiledNutritionData.current.potassium.amount.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Potassium')?.amount ??
    //     null,
    // )
    // compiledNutritionData.current.potassium.percentOfDailyNeeds.push(
    //   nutrients.find((nutrient) => nutrient.name === 'Potassium')
    //     ?.percentOfDailyNeeds ?? null,
    // )

    // compiledNutritionData.current.serving =
    //   servingType === 'count' ? servingCount : servingAmount + servingUnit
    setNutritionData(compiledNutritionData.current)
  }

  const saveToFirebase = async () => {
    try {
      const user = auth.currentUser

      if (user) {
        const docRef = await addDoc(collection(db, user.uid), {
          nutritionData: nutritionData,
          createdBy: user.uid,
          // servingSize: serving,
        })

        console.log('Document written with ID: ', docRef.id)
      } else {
        console.error('User not authenticated.')
      }
    } catch (error) {
      console.error('Error adding document: ', error)
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
          />
        </div>
        <NutritionFacts nutritionData={nutritionData} />
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
