import React from 'react';
import close from '../../../assets/icons/close.svg'
import NutritionFacts from '../../../components/NutritionFacts/NutritionFacts';
import { getIngredientInformation } from '../../../callApi';
import { useState } from 'react';

const IngredientModal = ({ isOpen, closeModal, ingredientData, nutrients, image, ingredientUnit }) => {


    const nutritionFacts = {
        calories: { amount: [nutrients?.[31]?.amount] },
        fat: { amount: [nutrients?.[26]?.amount], percentOfDailyNeeds: [nutrients?.[26]?.percentOfDailyNeeds]},
        satFat: { amount: [nutrients?.[18]?.amount], percentOfDailyNeeds: [nutrients?.[18]?.percentOfDailyNeeds] },
        transFat: { amount: [], percentOfDailyNeeds: [] },
        chol: { amount: [nutrients?.[13]?.amount], percentOfDailyNeeds: [nutrients?.[13]?.percentOfDailyNeeds] },
        sodium: { amount: [nutrients?.[27]?.amount], percentOfDailyNeeds: [nutrients?.[27]?.percentOfDailyNeeds] },
        carb: { amount: [nutrients?.[37]?.amount], percentOfDailyNeeds: [nutrients?.[37]?.percentOfDailyNeeds] },
        fiber: { amount: [nutrients?.[21]?.amount], percentOfDailyNeeds: [nutrients?.[21]?.percentOfDailyNeeds] },
        sugar: { amount: [nutrients?.[11]?.amount], percentOfDailyNeeds: [nutrients?.[11]?.percentOfDailyNeeds] },
        protein: { amount: [nutrients?.[34]?.amount], percentOfDailyNeeds: [nutrients?.[34]?.percentOfDailyNeeds] },
        vitD: { amount: [nutrients?.[29]?.amount], percentOfDailyNeeds: [nutrients?.[29]?.percentOfDailyNeeds] },
        calcium: { amount: [nutrients?.[9]?.amount], percentOfDailyNeeds: [nutrients?.[9]?.percentOfDailyNeeds] },
        iron: { amount: [nutrients?.[3]?.amount], percentOfDailyNeeds: [nutrients?.[3]?.percentOfDailyNeeds] },
        potassium: { amount: [nutrients?.[14]?.amount], percentOfDailyNeeds: [nutrients?.[14]?.percentOfDailyNeeds] }
    }

  return (
    <div>
        {isOpen && 
        <div className="w-screen h-screen">

        {/* Black Screen */}
        <div className="w-full h-full top-0 left-0 fixed bg-black opacity-50" onClick={() => closeModal()}></div>
        
        {/* Close Button */}
        <img src={close} alt="Close Button" className="absolute top-10 right-20 w-10 h-10" onClick={() => closeModal()}/>

        {/* Window with Data */}
        <div className="flex w-3/4 h-3/4 bg-header absolute top-0 left-0 mx-40 my-40 text-background-alt">
            <h2 className="text-5xl text-center">{ingredientData?.name}</h2>
            <h2>Showing Nutrition for: 100 {ingredientUnit}</h2>
            <img src={ingredientData.image} alt={ingredientData?.name} className="w-1/4"/>
            <NutritionFacts nutritionData={nutritionFacts}/>
        </div>
        </div>}
    </div>

  );
};

export default IngredientModal;
