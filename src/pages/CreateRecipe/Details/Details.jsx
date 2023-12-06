import React, { useState, useRef } from 'react'
import dot from '../../../assets/icons/dot.svg'
import search from '../../../assets/icons/search.svg'
import edit from '../../../assets/icons/edit.svg'
import NutritionFacts from '../../../components/NutritionFacts/NutritionFacts'
import SearchResults from './SearchResults/SearchResults'
import Advanced from './Advanced/Advanced'
import { getIngredients } from '../../../callApi'
import { auth, db } from '../../../Firebase'
import { collection, addDoc } from "firebase/firestore";

const Details = () => {
  const [name, setName] = useState('New Recipe')
  const [inputValue, setInputValue] = useState('');
  const [nutritionData, setNutritionData] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [servingSize, setServingSize] = useState(0);

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

  const handleServingSizeChange = (value) => {
    setServingSize(value);
  };

  const handleData = (data) => {
    if (data && data.length > 0 && data[0].id) {
      parseNutritionData(data);
      // add ingredient to list
      if (inputValue.trim() !== '') {
        setIngredientList(prevList => [...prevList, inputValue]);
        setInputValue('');
      }
    } else if (inputValue) {
      alert(`Was not able to find ingredient "${inputValue}".`);
    }
  }

  const compiledNutritionData = useRef({
    calories: { amount: [] },
    fat: { amount: [], percentOfDailyNeeds: [] },
    satFat: { amount: [], percentOfDailyNeeds: [] },
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
  });

  const parseNutritionData = (data) => {
    const nutrients = data[0]?.nutrition?.nutrients;

    compiledNutritionData.current.calories.amount.push(nutrients.find(nutrient => nutrient.name === 'Calories')?.amount ?? null);

    compiledNutritionData.current.fat.amount.push(nutrients.find(nutrient => nutrient.name === 'Fat')?.amount ?? null);
    compiledNutritionData.current.fat.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Fat')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.satFat.amount.push(nutrients.find(nutrient => nutrient.name === 'Saturated Fat')?.amount ?? null);
    compiledNutritionData.current.satFat.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Saturated Fat')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.chol.amount.push(nutrients.find(nutrient => nutrient.name === 'Cholesterol')?.amount ?? null);
    compiledNutritionData.current.chol.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Cholesterol')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.sodium.amount.push(nutrients.find(nutrient => nutrient.name === 'Sodium')?.amount ?? null);
    compiledNutritionData.current.sodium.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Sodium')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.carb.amount.push(nutrients.find(nutrient => nutrient.name === 'Carbohydrates')?.amount ?? null);
    compiledNutritionData.current.carb.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Carbohydrates')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.fiber.amount.push(nutrients.find(nutrient => nutrient.name === 'Fiber')?.amount ?? null);
    compiledNutritionData.current.fiber.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Fiber')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.sugar.amount.push(nutrients.find(nutrient => nutrient.name === 'Sugar')?.amount ?? null);
    compiledNutritionData.current.sugar.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Sugar')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.protein.amount.push(nutrients.find(nutrient => nutrient.name === 'Protein')?.amount ?? null);
    compiledNutritionData.current.protein.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Protein')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.vitD.amount.push(nutrients.find(nutrient => nutrient.name === 'Vitamin D')?.amount ?? null);
    compiledNutritionData.current.vitD.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Vitamin D')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.calcium.amount.push(nutrients.find(nutrient => nutrient.name === 'Calcium')?.amount ?? null);
    compiledNutritionData.current.calcium.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Calcium')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.iron.amount.push(nutrients.find(nutrient => nutrient.name === 'Iron')?.amount ?? null);
    compiledNutritionData.current.iron.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Iron')?.percentOfDailyNeeds ?? null);

    compiledNutritionData.current.potassium.amount.push(nutrients.find(nutrient => nutrient.name === 'Potassium')?.amount ?? null);
    compiledNutritionData.current.potassium.percentOfDailyNeeds.push(nutrients.find(nutrient => nutrient.name === 'Potassium')?.percentOfDailyNeeds ?? null);

    console.log(compiledNutritionData);
    setNutritionData(compiledNutritionData.current);
  }

  const saveToFirebase = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const docRef = await addDoc(collection(db, user.uid), {
          nutritionData: nutritionData,
          createdBy: user.uid,
          servingSize: servingSize
        });

        console.log('Document written with ID: ', docRef.id);
      } else {
        console.error('User not authenticated.');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

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
          placeholder="Enter an ingredient and it's amount then press Enter! (ex. '3 oz honey')"
        />
      </div>

      <NutritionFacts nutritionData={nutritionData} />
      {/* <SearchResults /> */}
      <Advanced onValueChange={handleServingSizeChange} />
      <button
        class="w-full bg-highlight-alt text-header font-bold px-20 py-3 rounded hover:shadow-md"
        onClick={saveToFirebase}
      >Save Your Recipe!</button>
    </div>
  )
}

export default Details;