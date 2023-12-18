import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dot from '../../assets/icons/dot.svg'
import loading from '../../assets/icons/loading.gif'
import Navigation from '../../components/Navigation/Navigation'
import Overview from '../Recipe/Overview/Overview'
import { auth } from '../../Firebase'
import {
  doc,
  getDoc,
  getFirestore,
  deleteDoc,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function CustomRecipe(recipeId) {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const [id, setId] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [nutritionData, setNutritionData] = useState({})
  const [servingRatio, setServingRatio] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [deleting, setDeleting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getRecipeInfo()
  }, [])

  const getRecipeInfo = async () => {
    setIsLoading(true)
    try {
      const user = auth.currentUser
      const queryParams = new URLSearchParams(location.search)
      const id = queryParams.get('id')
      setId(id)

      if (user) {
        const firestore = getFirestore()
        const recipeDocRef = doc(firestore, user.uid, id)
        const recipeDocSnap = await getDoc(recipeDocRef)

        if (recipeDocSnap.exists()) {
          const recipeData = recipeDocSnap.data()
          console.log(recipeData)
          setRecipeName(recipeData.recipeName)
          setServingRatio(recipeData.servingRatio)
          setNutritionData(recipeData.nutritionData)
          setIngredients(recipeData.ingredientList)
          setIsLoading(false)
        }
      }
    } catch (error) {
      alert('There was an error while fetching the recipe.')
      console.error('Error fetching recipe from firebase:', error)
    }
  }

  const handleDelete = async () => {
    try {
      setDeleting(true)

      const user = auth.currentUser
      const firestore = getFirestore()
      const collectionsDocRef = doc(firestore, user.uid, id)

      await deleteDoc(collectionsDocRef)

      const collectionsRef = doc(firestore, user.uid, 'collections')
      await updateDoc(collectionsRef, {
        collectionNames: arrayRemove(id),
      })
      alert(`Recipe deleted successfully.`)
      navigate('/dashboard')
    } catch (error) {
      alert(`There was an error while deleting recipe.`)
      console.error('Error deleting recipe from firebase:', error)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="bg-background">
      <Navigation />
      {isLoading ? (
        <div className="grid place-items-center w-full h-[90vh]">
          <img src={loading} className="w-8" />
        </div>
      ) : (
        <div className="w-full p-8 sm:py-10 sm:px-16 md:py-12 md:px-20 lg:py-28 lg:px-24 xl:px-60 2xl:py-32 2xl:px-96 3xl:px-[30rem] lg:flex lg:gap-4">
          {/* Title */}
          <div className="grow relative">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-header ">
              {recipeName}
            </h1>
            <p className="mt-3 md:mt-6 text-body-bold text-sm md:text-lg 2xl:text-xl 3xl:text-4xl ">
              Makes {servingRatio} servings &emsp;
            </p>

            <section className="bg-header rounded-lg lg:rounded-xl mt-4 p-4 sm:mt-6 sm:w-3/4 md:p-6 md:w-1/2 lg:w-3/4 xl:mt-10 xl:p-8 xl:w-2/3 2xl:w-2/3 text-background">
              <h2 className="ml-2 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
                Ingredients
              </h2>
              <div className="mt-2 sm:mt-4 md:mt-6 lg:text-base md:text-base sm:text-sm text-sm">
                {ingredients?.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <img
                      src={dot}
                      className="w-8 h-8 inline lg:leading-10 md:leading-10 sm:leading-6 leading-6 lg:mt-1 md:mt-1 sm:mt-[-0.25rem] mt-[-0.25rem]"
                    />
                    <p className="lg:leading-10 md:leading-10 sm:leading-6 leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Buttons for larger screens */}
            <div className="mt-4 md:mt-8 w-full lg:w-3/4 2xl:w-3/5 gap-2 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl lg:absolute lg:bottom-0 hidden lg:flex">
              <button
                class="text-red-700 p-2 rounded-lg hover:shadow-md"
                onClick={handleDelete}
                disabled={deleting}
              >
                Delete
              </button>
              <button
                class="bg-background-bright text-header p-2 rounded-lg hover:shadow-md"
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </button>
            </div>
          </div>

          <NutritionFacts
            nutritionData={nutritionData}
            servingRatio={servingRatio}
          />

          {/* Buttons for smaller screens */}
          <div className="mt-6 sm:mt-8 w-full sm:w-1/3 lg:w-1/2 gap-2 text-xs md:text-sm lg:text-base 2xl:text-xl 3xl:text-2xl xl:absolute xl:bottom-0 flex justify-between lg:hidden">
            <button
              class="text-red-700 p-2 rounded-lg hover:shadow-md"
              onClick={handleDelete}
              disabled={deleting}
            >
              Delete
            </button>
            <button
              class="bg-background-bright text-header p-2 rounded-lg hover:shadow-md"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
