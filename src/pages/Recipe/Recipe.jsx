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
  const [dietTags, setDietTags] = useState([])
  const [recipeId, setRecipeId] = useState(null)

  const getAllRecipeTags = (data) => {
    const tags = new Set();

    data.diets?.map((item) => tags.add(item));
    data.cuisines?.map((item) => tags.add(item));

    if(data?.glutenFree) {
      tags.add("gluten free")
    }
    if(data?.vegan) {
      tags.add("vegan")
    }
    if(data?.dairyFree) {
      tags.add("dairy free")
    }
    
    return Array.from(tags)
  }

  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const queryParams = new URLSearchParams(location.search)
        const id = queryParams.get('id')
        setRecipeId(id);

        if (id) {
          const data = await getRecipeDetails(id)
          setRecipeInfo(data)
          setNutritionInfo(data.nutrition)
          console.log(data)
          const tags = getAllRecipeTags(data)
          setDietTags(tags);
          console.log(tags)
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
      <div className="lg:py-28 lg:px-44 py-12 px-20 mx-auto">
        <Overview
          recipeId={recipeId}
          recipeName={recipeInfo.title}
          recipeImage={recipeInfo.image}
          servings={recipeInfo.servings}
          dietTags={dietTags}
          readyInMinutes={recipeInfo.readyInMinutes}
        />
        <Details
          nutrients={nutritionInfo.nutrients}
          ingredients={nutritionInfo.ingredients}
          weightPerServing={nutritionInfo.weightPerServing}
          caloricBreakdown={nutritionInfo.caloricBreakdown}
          recipeInstructions={recipeInfo.analyzedInstructions}
          servings={recipeInfo.servings}
        />
      </div>
    </div>
  )
}
