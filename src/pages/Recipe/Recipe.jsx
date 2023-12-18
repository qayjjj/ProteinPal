import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Overview from './Overview/Overview'
import Details from './Details/Details'
import { getRecipeDetails } from '../../callApi'
import Footer from '../../components/Footer/Footer'
import { auth, db } from '../../Firebase'
import {
  setDoc,
  getDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import loading from '../../assets/icons/loading.gif'

export default function Recipe() {
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const [recipeInfo, setRecipeInfo] = useState({})
  const [nutritionInfo, setNutritionInfo] = useState({})
  const [dietTags, setDietTags] = useState([])
  const [recipeId, setRecipeId] = useState(null)

  useEffect(() => {
    getRecipeInfo()
    fetchSavedStatus()
  }, [location.search])

  const fetchSavedStatus = async () => {
    const user = auth.currentUser
    if (user) {
      const docRef = doc(db, user.uid, 'savedRecipes')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        if (data.recipeIds.includes(recipeId)) {
          setIsSaved(true)
        }
      }
    }
  }

  const getRecipeInfo = async () => {
    setIsLoading(true)
    try {
      const queryParams = new URLSearchParams(location.search)
      const id = queryParams.get('id')
      setRecipeId(id)

      if (id) {
        const data = await getRecipeDetails(id)
        setRecipeInfo(data)
        setNutritionInfo(data.nutrition)
        const tags = getAllRecipeTags(data)
        setDietTags(tags)
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  const getAllRecipeTags = (data) => {
    const tags = new Set()

    data.diets?.map((item) => tags.add(item))
    data.cuisines?.map((item) => tags.add(item))

    if (data?.glutenFree) {
      tags.add('gluten free')
    }
    if (data?.vegan) {
      tags.add('vegan')
    }
    if (data?.dairyFree) {
      tags.add('dairy free')
    }
    return Array.from(tags)
  }

  const handleSaveRecipe = async () => {
    const user = auth.currentUser
    if (user) {
      try {
        const docRef = doc(db, user.uid, 'savedRecipes')
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          if (data.recipeIds.includes(recipeId)) {
            // in array, remove
            await setDoc(
              docRef,
              { recipeIds: arrayRemove(recipeId) },
              { merge: true },
            )
            console.log('RecipeId removed: ', recipeId)
          } else {
            // not in array, add
            await setDoc(
              docRef,
              { recipeIds: arrayUnion(recipeId) },
              { merge: true },
            )
            console.log('RecipeId added: ', recipeId)
          }
        } else {
          // doc dne create
          await setDoc(docRef, { recipeIds: [recipeId] })
          console.log('Document created with recipeId: ', recipeId)
        }

        setIsSaved((prev) => !prev)
      } catch (error) {
        console.error('Error adding or removing recipeId: ', error)
      }
    } else {
      console.error('User not authenticated.')
    }
  }

  return (
    <div>
      <Navigation />
      {isLoading ? (
        <div className="grid place-items-center w-full h-[90vh]">
          <img src={loading} className="w-8" />
        </div>
      ) : (
        <div className="py-10 px-8 sm:px-20 lg:py-28 lg:px-44 2xl:px-72">
          <Overview
            recipeId={recipeId}
            recipeName={recipeInfo.title}
            recipeImage={recipeInfo.image}
            servings={recipeInfo.servings}
            dietTags={dietTags}
            readyInMinutes={recipeInfo.readyInMinutes}
            isLoading={isLoading}
            isSaved={isSaved}
            handleSaveRecipe={handleSaveRecipe}
          />
          <Details
            nutrients={nutritionInfo.nutrients}
            ingredients={nutritionInfo.ingredients}
            weightPerServing={nutritionInfo.weightPerServing}
            caloricBreakdown={nutritionInfo.caloricBreakdown}
            recipeInstructions={recipeInfo.analyzedInstructions}
            servings={recipeInfo.servings}
            isSaved={isSaved}
            handleSaveRecipe={handleSaveRecipe}
          />
        </div>
      )}

      <Footer />
    </div>
  )
}
