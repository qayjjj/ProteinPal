import React, { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import addIcon from '../../../assets/icons/add.svg'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../../../Firebase'
import { getRecipeDetails } from '../../../callApi'
import { Link } from 'react-router-dom'

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const user = auth.currentUser;
      if (user) {
        const firestore = getFirestore();
        const savedRecipesRef = doc(firestore, user.uid, 'savedRecipes');
        const savedRecipesSnap = await getDoc(savedRecipesRef);

        if (savedRecipesSnap.exists()) {
          const savedRecipesData = savedRecipesSnap.data();
          const recipesData = [];
          console.log(savedRecipesData);

          for (const id of savedRecipesData.recipeIds) {
            const data = await getRecipeDetails(id);
            recipesData.push(data);
          }
          setRecipes(recipesData);
        }
      }
    };
    fetchRecipes();
  }, [auth.currentUser]);

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-header">Saved Recipes</h2>
        <button className="flex items-center">
          <Link to="/recipes" className="flex items-center">
            <img src={addIcon} className="w-8" />
            <span className="text-2xl font-bold ml-2 text-background-bright">
              Add
            </span>
          </Link>
        </button>
      </div>
      <div
        className={`rounded-lg mt-6 min-h-[24rem] w-full bg-background-alt grid ${recipes.length !== 0 && 'grid-cols-4'
          }`}
      >
        {recipes.length === 0 ? (
          <p className="place-self-center text-background-bright">
            Save a recipe and find it here!
          </p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard
              backgroundColor="bg-background-alt"
              headerTextColor="text-highlight-bright"
              // recipeImage={item.image}
              recipeName={recipe.title}
            // recipeId={item.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
