import React, { useState, useEffect } from 'react'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import addIcon from '../../../assets/icons/add.svg'
import { Link } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../../../Firebase'

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const user = auth.currentUser;
      if (user) {
        const firestore = getFirestore();
        const collectionsDocRef = doc(firestore, user.uid, 'collections');
        const collectionsDocSnap = await getDoc(collectionsDocRef);

        if (collectionsDocSnap.exists()) {
          const collectionsData = collectionsDocSnap.data();
          // console.log(collectionsData.collectionNames);
          const recipesData = [];

          for (const coll of collectionsData.collectionNames) {
            const recipeRef = doc(firestore, user.uid, coll);
            const recipeSnap = await getDoc(recipeRef);
            if (recipeSnap.exists()) {
              recipesData.push(recipeSnap.data());
            }
          }
          // console.log(recipesData);
          setRecipes(recipesData);
        }
      }
    };
    fetchRecipes();
  }, [auth.currentUser]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-header">My Recipes</h2>
        <button className="flex items-center">
          <Link to="/create" className="flex items-center">
            <img src={addIcon} alt="Add" className="w-8" />
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
            You don't have any recipes yet!
          </p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard
              backgroundColor="bg-background-alt"
              headerTextColor="text-highlight-bright"
              // recipeImage={item.image}
              recipeName={recipe.recipeName}
            // recipeId={item.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
