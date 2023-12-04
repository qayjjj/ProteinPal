import React from 'react'
import dot from '../../../assets/icons/dot.svg'
import PropTypes from 'prop-types'

function Details({
  nutrients,
  ingredients,
  caloricBreakdown,
  weightPerServing,
}) {
  console.log(nutrients)
  console.log(ingredients)
  console.log(caloricBreakdown)
  console.log(weightPerServing)

  return (
    <div className="flex w-full mt-10">
      {/* Ingredients */}
      <div className="bg-background-alt px-8 py-10 w-1/3 min-h-[30rem]">
        <h2 className="text-5xl font-bold text-header">Ingredients</h2>
        <div className="mt-10 flex flex-col">
          {ingredients?.map((item, index) => (
            <div key={index} className="flex items-start">
              <img src={dot} className="w-8 h-8 inline leading-10 mt-1" />
              <p className="inline text-header text-xl leading-10">
                {item.amount} {item.unit} {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Macro Information */}
      <div className="flex-1 ml-12 bg-header p-12 w-1/4 min-h-[30rem] text-background-alt">
        <h2 className="text-5xl font-bold text-background-alt">
          Macro Information
        </h2>

        {/* Macros */}
        <div className="flex items-center justify-between h-full items-center">
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
          </div>

          {/* Others */}
          <div className="flex">
            <div className="flex flex-col text-2xl font-bold">
              <div>Cholesterol</div>
              <div>Sodium</div>
              <div>Calcium</div>
              <div>Magnesium</div>
              <div>Potassium</div>
              <div>Iron</div>
            </div>
            <div className="ml-20 flex flex-col text-2xl">
              <div>
                {nutrients?.[6].amount} {nutrients?.[6].unit}
              </div>
              <div>
                {nutrients?.[7].amount} {nutrients?.[7].unit}
              </div>
              <div>
                {nutrients?.[20].amount} {nutrients?.[20].unit}
              </div>
              <div>
                {nutrients?.[13].amount} {nutrients?.[13].unit}
              </div>
              <div>
                {nutrients?.[15].amount} {nutrients?.[15].unit}
              </div>
              <div>
                {nutrients?.[14].amount} {nutrients?.[14].unit}
              </div>
            </div>
          </div>
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
}
export default Details
