/**
 * API call methods to Spoontacular
 * */
import axios from 'axios';
import { SPOONACULAR_API_KEY } from './app.config';

async function callApi(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': SPOONACULAR_API_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function getVegRecipes(params, number = 100) {
    const vegParams = {
        diet: 'vegetarian',
        number: number,
        ...params
    }
    const urlparams = new URLSearchParams(vegParams);
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${urlparams}`
    return callApi(url);
}

export async function getRecipeDetails(recipeId) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information?includeNutrition=true`;
    return callApi(url);
}

export async function getIngredients(ingredientText, servings) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('servings', '2');
    encodedParams.set('ingredientList', ingredientText);

    const options = {
        method: 'POST',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/parseIngredients',
        params: {
            includeNutrition: 'true'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': SPOONACULAR_API_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}