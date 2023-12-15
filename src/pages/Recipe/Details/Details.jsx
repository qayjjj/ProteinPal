import React from 'react'
import dot from '../../../assets/icons/dot.svg'
import PropTypes from 'prop-types'
import NutritionFacts from '../../../components/NutritionFacts/NutritionFacts'

function Details({
  nutrients,
  ingredients,
  caloricBreakdown,
  weightPerServing,
  recipeInstructions
}) {

  
  const nutritionFacts = {
    calories: { amount: [nutrients?.[0].amount] },
    fat: { amount: [nutrients?.[1].amount], percentOfDailyNeeds: [nutrients?.[1].percentOfDailyNeeds]},
    satFat: { amount: [nutrients?.[2].amount], percentOfDailyNeeds: [nutrients?.[2].percentOfDailyNeeds] },
    transFat: { amount: [], percentOfDailyNeeds: [] },
    chol: { amount: [nutrients?.[6].amount], percentOfDailyNeeds: [nutrients?.[6].percentOfDailyNeeds] },
    sodium: { amount: [nutrients?.[7].amount], percentOfDailyNeeds: [nutrients?.[7].percentOfDailyNeeds] },
    carb: { amount: [nutrients?.[4].amount], percentOfDailyNeeds: [nutrients?.[4].percentOfDailyNeeds] },
    fiber: { amount: [nutrients?.[21].amount], percentOfDailyNeeds: [nutrients?.[21].percentOfDailyNeeds] },
    sugar: { amount: [nutrients?.[5].amount], percentOfDailyNeeds: [nutrients?.[5].percentOfDailyNeeds] },
    protein: { amount: [nutrients?.[9].amount], percentOfDailyNeeds: [nutrients?.[9].percentOfDailyNeeds] },
    vitD: { amount: [nutrients?.[25].amount], percentOfDailyNeeds: [nutrients?.[25].percentOfDailyNeeds] },
    calcium: { amount: [nutrients?.[20].amount], percentOfDailyNeeds: [nutrients?.[20].percentOfDailyNeeds] },
    iron: { amount: [nutrients?.[17].amount], percentOfDailyNeeds: [nutrients?.[17].percentOfDailyNeeds] },
    potassium: { amount: [nutrients?.[27].amount], percentOfDailyNeeds: [nutrients?.[27].percentOfDailyNeeds] }
  }


  return (
    <div className="flex w-full mt-10 flex-wrap">

      <div className="flex flex-col flex-wrap w-full lg:w-1/2">
        {/* Ingredients */}
        <div className="bg-header text-background-alt rounded-lg w-full min-h-[20rem] px-8 py-10 my-10">
          <h2 className="text-4xl font-bold text-background-alt">Ingredients</h2>
          <div className="mt-6 text-background-alt">
            {ingredients?.map((item, index) => (
              <div key={index} className="flex items-start">
                <img src={dot} className="w-8 h-8 inline leading-10 mt-1" />
                <p className="inline text-background-alt text-lg leading-10">
                  {item.amount} {item.unit} {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-background-bright px-8 py-10 mt-10 w-full min-h-[20rem] rounded-lg">
          <h2 className="text-4xl font-bold text-body">Instructions</h2>
          <ol className="mt-6 text-background-header text-lg">
            {recipeInstructions?.[0].steps?.map((item, index) => (
              <li key={index} className="mt-4">
                 <span className="text-body-bold font-bold">{item.number}.</span> {item.step}
              </li>
            ))}
          </ol>
        </div>

      </div>

      <div className="flex mt-20 flex-col w-full lg:w-1/2 lg:mt-10 bg-background-alt lg:bg-transparent items-center rounded-lg">
        {/* Nutrition Facts */}
        <div className="text-xl">
          <NutritionFacts nutritionData={nutritionFacts}/>
        </div>
      </div>

      </div>
  )
}
Details.propTypes = {
  nutrients: PropTypes.array,
  ingredients: PropTypes.array,
  caloricBreakdown: PropTypes.array,
  weightPerServing: PropTypes.object,
  recipeInstructions: PropTypes.array,
}
export default Details
