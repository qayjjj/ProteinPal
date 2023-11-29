import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { getVegRecipes } from '../../callApi'

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchRecipes = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const userKeyword = queryParams.get('q');

        if(userKeyword) {
          document.getElementById('searchHeader').style.display = 'block'; 
          document.getElementById('searchKeyword').innerHTML = userKeyword;
          const data = await getVegRecipes({query: userKeyword});
          setRecipes(data.results);
        }
        else {
          document.getElementById('searchHeader').style.display = 'none'; 
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
      <h1 id='searchHeader' className='m-auto text-3xl text-body-bold pt-12 text-center'>Search results for <span id='searchKeyword' className='font-bold'></span></h1>
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {recipes.map((item) => (
          <RecipeCard
            backgroundColor="bg-background-alt"
            headerTextColor="text-header"
            bodyTextColor="text-header"
          />
        ))}
      </div>
    </div>
  )
}
