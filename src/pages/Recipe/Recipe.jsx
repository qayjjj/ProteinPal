import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Overview from './Overview/Overview'
import Details from './Details/Details'
import { getRecipeDetails } from '../../callApi'

export default function Recipe() {
  const location = useLocation()
  const [recipeInfo, setRecipeInfo] = useState({})
  const [nutritionInfo, setNutritionInfo] = useState({})

  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const queryParams = new URLSearchParams(location.search)
        const id = queryParams.get('id')

        if (id) {
          const data = await getRecipeDetails(id)
          setRecipeInfo(data)
          setNutritionInfo(data.nutrition)
          console.log(data.nutrition)
        }
      } catch (error) {
        console.error('Error fetching recipes:', error)
      }
    }
    getRecipeInfo()
  }, [location.search])

  return (
    <div>
      <Navigation />
      <div className="py-28 px-44">
        <Overview
          recipeName={recipeInfo.title}
          recipeImage={recipeInfo.image}
          recipeInstructions={recipeInfo.instructions}
          servings={recipeInfo.servings}
        />
        <Details
          nutrients={nutritionInfo.nutrients}
          ingredients={nutritionInfo.ingredients}
          weightPerServing={nutritionInfo.weightPerServing}
          caloricBreakdown={nutritionInfo.caloricBreakdown}
        />
      </div>
    </div>
  )
}
