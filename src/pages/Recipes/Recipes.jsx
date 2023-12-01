import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { getVegRecipes } from '../../callApi'

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchRecipes = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const userKeyword = queryParams.get('q');
        setKeyword(userKeyword);

        if(userKeyword) {
          const data = await getVegRecipes({query: userKeyword});
          setRecipes(data.results);
        }
        else {
          const data = await getVegRecipes();
          setRecipes(data.results);
        }

      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    searchRecipes();
  }, [location.search]);

  console.log(recipes);

  return (
    <div className="bg-background">
      <Navigation />
      { keyword &&
        <h1 className='m-auto text-3xl text-body-bold pt-12 text-center'>Search results for <span className='font-bold'>{keyword}</span></h1>
      }
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {recipes.map((item) => (
          <RecipeCard
            backgroundColor="bg-background-alt"
            headerTextColor="text-header"
            bodyTextColor="text-header"
            recipeImage={item.image}
            recipeName={item.title}
            recipeId={item.id}
          />
        ))}
      </div>
    </div>
  )
}
