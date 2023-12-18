import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Overview from '../Recipe/Overview/Overview'
import { auth } from '../../Firebase';
import { doc, getDoc, getFirestore, deleteDoc, updateDoc, arrayRemove } from 'firebase/firestore'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'
import { useNavigate } from 'react-router-dom'

export default function CustomRecipe(recipeId) {
  const location = useLocation()
  const [id, setId] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [nutritionData, setNutritionData] = useState({})
  const [servingRatio, setServingRatio] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const user = auth.currentUser;
        const queryParams = new URLSearchParams(location.search)
        const id = queryParams.get('id')
        setId(id);

        if (user) {
          const firestore = getFirestore();
          const recipeDocRef = doc(firestore, user.uid, id);
          const recipeDocSnap = await getDoc(recipeDocRef);

          if (recipeDocSnap.exists()) {
            const recipeData = recipeDocSnap.data();
            console.log(recipeData);
            setRecipeName(recipeData.recipeName);
            setServingRatio(recipeData.servingRatio);
            setNutritionData(recipeData.nutritionData);
            setIngredients(recipeData.ingredientList);
          }
        }

      } catch (error) {
        console.error('Error fetching recipe from firebase:', error)
      }
    }
    getRecipeInfo();
  }, [])

  const handleDelete = async () => {
    try {
      setDeleting(true);

      const user = auth.currentUser;
      const firestore = getFirestore();
      const collectionsDocRef = doc(firestore, user.uid, id);

      await deleteDoc(collectionsDocRef);

      const collectionsRef = doc(firestore, user.uid, 'collections');
      await updateDoc(collectionsRef, {
        collectionNames: arrayRemove(id)
      });
      console.log(`Document with ID ${id} deleted successfully.`);

      navigate('/dashboard')
    } catch (error) {
      console.error('Error deleting recipe from firebase:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="flex-col w-full lg:w-[55%] lg:mx-4 my-4 mt-10">
        <div className="flex md:flex-nowrap flex-wrap">
          {/* Title */}
          <div className="flex-row w-10/12">
            <h1 className="text-5xl font-bold text-header ">{recipeName}</h1>
            <p className="mt-6 text-body-bold text-xl">Makes {servingRatio} servings &emsp;</p>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-10 flex-wrap">
        <div className="flex flex-col flex-wrap w-full lg:w-1/2">
          {/* Ingredients */}
          <div className="bg-header text-background-alt rounded-lg w-full min-h-[20rem] px-8 py-10 my-10">
            <h2 className="text-4xl font-bold text-background-alt">Ingredients</h2>
            <div className="mt-6 text-background-alt">
              {ingredients?.map((item, index) => (
                <div key={index} className="flex items-start">
                  <p className="inline text-background-alt text-lg leading-10">
                    - {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex mt-20 flex-col w-full lg:w-1/2 lg:mt-10 bg-background-alt lg:bg-transparent items-center rounded-lg">
          {/* Nutrition Facts */}
          <div className="text-xl">
            <NutritionFacts nutritionData={nutritionData} servingRatio={servingRatio} />
          </div>
        </div>
        <button onClick={handleDelete} disabled={deleting}>Delete Recipe</button>
      </div>
    </div>
  )
}
