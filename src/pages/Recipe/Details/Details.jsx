import React from 'react'
import dot from '../../../assets/icons/dot.svg'
import PropTypes from 'prop-types'
import NutritionFacts from '../../../components/NutritionFacts/NutritionFacts'

function Details({
  nutrients,
  ingredients,
  caloricBreakdown,
  weightPerServing,
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

  console.log(nutrients)
  console.log(ingredients)
  console.log(caloricBreakdown)
  console.log(weightPerServing)

  return (
    <div className="flex w-full mt-10">
      {/* Ingredients */}
      <div className="bg-header px-8 py-10 w-1/3 min-h-[30rem] text-background-alt">
        <h2 className="text-5xl font-bold text-background-alt">Ingredients</h2>
        <div className="mt-10 flex flex-col text-background-alt">
          {ingredients?.map((item, index) => (
            <div key={index} className="flex items-start">
              <img src={dot} className="w-8 h-8 inline leading-10 mt-1" />
              <p className="inline text-background-alt text-xl leading-10">
                {item.amount} {item.unit} {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Macro Information */}
    
        {/* Macros */}
        {/* <div className="flex items-center justify-between h-full items-center">
          <div>
            <h3 className="text-4xl font-bold leading-[4rem]">
              Calories {nutrients?.[0].amount}
              {nutrients?.[0].unit}
            </h3>
            <h4 className="text-4xl font-bold leading-[4rem]">
              Protein {nutrients?.[8].amount}
              {nutrients?.[8].unit}
            </h4>
            <h4 className="text-4xl font-bold leading-[4rem]">
              Fat {nutrients?.[1].amount}
              {nutrients?.[1].unit}
            </h4>
            <h4 className="text-4xl font-bold leading-[4rem]">
              Carbs {nutrients?.[3].amount}
              {nutrients?.[3].unit}
            </h4>
          </div> */}

          {/* Others */}
          <div className="flex">
            <div className="ml-20 flex flex-col text-2xl">
              <NutritionFacts nutritionData={nutritionFacts}/>
            </div>
          </div>
        </div>
    // </div>
  )
}
Details.propTypes = {
  nutrients: PropTypes.array,
  ingredients: PropTypes.array,
  caloricBreakdown: PropTypes.array,
  weightPerServing: PropTypes.object,
}
export default Details
