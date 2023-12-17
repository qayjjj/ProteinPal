import React from 'react';
import close from '../../../assets/icons/close.svg'

const IngredientModal = ({ isOpen, closeModal, ingredientData, nutrients, ingredientUnit }) => {

  /**
   * Helper to find the object corresponding to the nutrition item since 
   * the nutrition object in Ingredients is not consistently ordered like Recipe
  */  
  const findNutritionObjectByName = (name) => {
    return nutrients?.find((item) => item.name === name);
  };

  const calories = findNutritionObjectByName('Calories')
  const fat = findNutritionObjectByName('Fat')
  const carb = findNutritionObjectByName('Carbohydrates')
  const protein = findNutritionObjectByName('Protein')

  return (
    <div>
        {isOpen && 
        <div className="w-screen h-screen">

        {/* Black Screen */}
        <div className="w-full h-full top-0 left-0 fixed bg-black opacity-50 overflow-hidden" onClick={() => closeModal()}></div>
        
        {/* Window with Data */}
        <div className="bg-background overflow-hidden absolute top-0 bottom-0 left-0 right-0 m-auto rounded-lg text-body justify-center
        w-4/5 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:1/2 h-2/5 sm:h-2/5 md:h-3/5 lg:h-3/5 xl:h-3/5 overflow-y-scroll">

          {/* Close Button */}
          <img src={close} alt="Close Button" className="ml-4 mt-4 xl:w-10 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 w-6 h-6" onClick={() => closeModal()}/>

          {/* Text Container */}
          <div className="justify-center align-center mt-0">

            {/* Ingredient Name */}
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold text-header">{ingredientData?.name} </h2>
            
            {/* Nutrition Container */}
            <div className="flex justify-center mx-auto w-full mt-4 text-header lg:text-base md:text-base sm:text-sm text-sm flex-wrap">
              
              {/* Calories */}
              <div className="flex-col p-3 bg-background-alt lg:w-2/5 md:w-2/5 sm:w-2/5 w-2/5 rounded-lg mr-2 my-2">
                <p className="font-bold">{calories?.amount}</p> 
                <p>{calories?.unit}</p>
              </div>
              
              {/* Carbs */}
              <div className="flex-col p-3 bg-background-alt lg:w-2/5 md:w-2/5 sm:w-2/5 w-2/5 rounded-lg mr-2 my-2">
                <p className="font-bold">{carb?.amount}{carb?.unit}</p> 
                <p>Carbs</p>              
              </div>
              
              {/* Fat */}
              <div className="flex-col p-3 bg-background-alt lg:w-2/5 md:w-2/5 sm:w-2/5 w-2/5 rounded-lg mr-2 my-2">
                <p className="font-bold"> {fat?.amount} {fat?.unit}</p>
                <p>Fat</p>
              </div>
              
              {/* Protein */}
              <div className="flex-col p-3 bg-background-alt lg:w-2/5 md:w-2/5 sm:w-2/5 w-2/5 rounded-lg mr-2 my-2">
                <p className="font-bold">{protein?.amount} {protein?.unit}</p>
                <p>Protein</p>
              </div> 
          </div>

          {/* Divider */}
          <div className="lg:w-2/5 md:w-2/5 sm:w-3/5 w-3/5 h-1 bg-body-bold mx-auto lg:mt-4 md:mt-4 sm:mt-2 mt-2 rounded"></div>
          <p className="lg:text-base md:text-base sm:text-sm text-sm mx-auto mt-2 pb-2 text-center"> per 100{ingredientUnit} serving</p>

        </div>
        </div>
      </div>}
    </div>

  );
};

export default IngredientModal;
