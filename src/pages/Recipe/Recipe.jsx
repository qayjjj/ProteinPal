import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Overview from './Overview/Overview'
import Details from './Details/Details'
import { getRecipeDetails } from '../../callApi'

export default function Recipe() {
  const location = useLocation();
  const [recipeId, setRecipeId] = useState('');
  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        console.log(id);
        setRecipeId(id);

        if(id) {
          const data = await getRecipeDetails(id);
          setRecipeInfo(data);
          console.log(data)
        }

      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    getRecipeInfo();
  }, [location.search]);

  return (
    <div>
      <Navigation />
      <div className="py-28 px-44">
        <Overview />
        <Details />
      </div>
    </div>
  )
}
