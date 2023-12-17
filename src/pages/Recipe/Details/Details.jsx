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


  console.log(nutrients)
  
  const nutritionFacts = {
    calories: { amount: nutrients?.[0].amount },
    fat: { amount: nutrients?.[1].amount, percentOfDailyNeeds: nutrients?.[1].percentOfDailyNeeds},
    satFat: { amount: nutrients?.[2].amount, percentOfDailyNeeds: nutrients?.[2].percentOfDailyNeeds },
    transFat: { amount: [], percentOfDailyNeeds: [] },
    chol: { amount: nutrients?.[6].amount, percentOfDailyNeeds: nutrients?.[6].percentOfDailyNeeds },
    sodium: { amount: nutrients?.[7].amount, percentOfDailyNeeds: nutrients?.[7].percentOfDailyNeeds },
    carb: { amount: nutrients?.[4].amount, percentOfDailyNeeds: nutrients?.[4].percentOfDailyNeeds },
    fiber: { amount: nutrients?.[21].amount, percentOfDailyNeeds: nutrients?.[21].percentOfDailyNeeds },
    sugar: { amount: nutrients?.[5].amount, percentOfDailyNeeds: nutrients?.[5].percentOfDailyNeeds },
    protein: { amount: nutrients?.[8].amount, percentOfDailyNeeds: nutrients?.[8].percentOfDailyNeeds },
    vitD: { amount: nutrients?.[25].amount, percentOfDailyNeeds: nutrients?.[25].percentOfDailyNeeds },
    calcium: { amount: nutrients?.[20].amount, percentOfDailyNeeds: nutrients?.[20].percentOfDailyNeeds },
    iron: { amount: nutrients?.[17].amount, percentOfDailyNeeds: nutrients?.[17].percentOfDailyNeeds },
    potassium: { amount: nutrients?.[27].amount, percentOfDailyNeeds: nutrients?.[27].percentOfDailyNeeds }
  }

  console.log(caloricBreakdown)
  console.log(nutritionFacts)
  console.log(weightPerServing)


  return (
    <div className="flex w-full mt-10 flex-wrap m-auto">

        {/* Ingredients */}
        <section className="bg-background-alt text-header rounded-lg px-8 py-8 
        lg:w-3/5 m:w-full sm:w-full w-full min-h-[12rem] lg:my-10 md:my-8 sm:my-4 my-4">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-header">Ingredients</h2>
          <div className="mt-6 text-header lg:text-base md:text-base sm:text-sm text-sm">
            {ingredients?.map((item, index) => (
              <div key={index} className="flex items-start">
                <img src={dot} className="w-8 h-8 inline lg:leading-10 md:leading-10 sm:leading-6 leading-6 lg:mt-1 md:mt-1 sm:mt-[-0.25rem] mt-[-0.25rem]" />
                <p className="inline text-header lg:leading-10 md:leading-10 sm:leading-6 leading-6">
                  {item.amount} {item.unit} {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-transparent min-h-[12rem] rounded-lg px-8 py-8
         lg:w-3/5 m:w-full sm:w-full w-full lg:my-10 md:my-8 sm:my-4 my-4">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-body">Instructions</h2>
          <ol className="mt-6 text-background-header lg:text-base md:text-base sm:text-sm text-sm">
            {recipeInstructions?.[0].steps?.map((item, index) => (
              <li key={index} className="mt-4">
                 <span className="text-body-bold font-bold">{item.number}.</span> {item.step}
              </li>
            ))}
          </ol>
        </section>

      {/* Nutrition Information */}
      <section className="bg-transparent text-header rounded-lg px-8 py-8
        lg:w-3/5 m:w-full sm:w-full w-full min-h-[12rem] lg:my-10 md:my-8 sm:my-4 my-4">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-header">Nutrition Facts 
            <span className="lg:text-base md:text-base sm:text-sm text-sm font-normal ml-2"> (per {weightPerServing?.amount}{weightPerServing?.unit} serving)</span>
          </h2>
          <div className="mt-6 text-header lg:text-base md:text-base sm:text-sm text-sm">
           <p>{nutrients?.[0].amount} {nutrients?.[0].unit}</p>
           <p>Carbohydrates {nutrients?.[4].amount} {nutrients?.[4].unit}</p>
           <p>Fat {nutrients?.[1].amount} {nutrients?.[1].unit}</p>
           <p>Protein {nutritionFacts.protein.amount} {nutritionFacts.protein.unit}</p>


          </div>
      </section>

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
