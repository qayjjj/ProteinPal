/**
 * API call methods to Spoontacular
 * */ 


async function callApi(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0606b56a87mshdc56e9a6bf0cfd9p12cb18jsnd6f75e8bccb2',
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

export async function getVegRecipes(params) {
    const vegParams = {
        diet: 'vegetarian',
        number: 100,
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
