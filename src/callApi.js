/**
 * API call methods to Spoontacular
 * */
import axios from 'axios'
import { SPOONACULAR_API_KEY } from './app.config'

async function callApi(url) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': SPOONACULAR_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export async function getVegRecipes(params, number = 100) {
  const vegParams = {
    diet: 'vegetarian',
    number: number,
    ...params,
  }
  const urlparams = new URLSearchParams(vegParams)
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${urlparams}`
  return callApi(url)
}

export async function getRecipeDetails(recipeId) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information?includeNutrition=true`
  return callApi(url)
}

export async function getIngredients(query) {
  const options = {
    method: 'GET',
    url:
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search',
    params: {
      query,
      includeNutrition: 'true',
    },
    headers: {
      'X-RapidAPI-Key': SPOONACULAR_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function getIngredientInformation(id, amount, unit) {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/${id}/information`,
    params: {
      amount,
      unit,
    },
    headers: {
      'X-RapidAPI-Key': '0606b56a87mshdc56e9a6bf0cfd9p12cb18jsnd6f75e8bccb2',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    console.log('res', response.data.nutrition)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
