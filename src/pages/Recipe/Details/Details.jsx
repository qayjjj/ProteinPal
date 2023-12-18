import React from 'react'
import dot from '../../../assets/icons/dot.svg'
import PropTypes from 'prop-types'

function Details({
  nutrients,
  ingredients,
  caloricBreakdown,
  weightPerServing,
  recipeInstructions,
  servings,
  isSaved,
  handleSaveRecipe,
}) {
  return (
    <div className="flex w-full flex-wrap justify-center">
      {/* Ingredients */}
      <section
        className="bg-background-alt text-header rounded-lg p-6 
        lg:w-4/5 md:w-3/4 w-full min-h-[12rem] lg:my-10 md:my-8 my-4"
      >
        <h2 className="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-header">
          Ingredients
        </h2>
        <div className="mt-3 lg:mt-6 text-header lg:text-base md:text-base sm:text-sm text-sm">
          {ingredients?.map((item, index) => (
            <div key={index} className="flex items-start">
              <img
                src={dot}
                className="w-8 h-8 inline lg:leading-10 md:leading-10 sm:leading-6 leading-6 lg:mt-1 md:mt-1 sm:mt-[-0.25rem] mt-[-0.25rem]"
              />
              <p className="inline text-header lg:leading-10 md:leading-10 sm:leading-6 leading-6">
                {item.amount} {item.unit} {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructions */}
      <section
        className="bg-transparent min-h-[12rem] rounded-lg px-2
         lg:w-4/5 md:w-3/4 w-full"
      >
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-body">
          Instructions
        </h2>
        <ol className="mt-6 text-background-header lg:text-base md:text-base sm:text-sm text-sm">
          {recipeInstructions?.[0]?.steps?.map((item, index) => (
            <li key={index} className="mt-4">
              <span className="text-body-bold font-bold">{item.number}.</span>{' '}
              {item.step}
            </li>
          ))}
        </ol>
      </section>

      {/* Nutrition Information */}
      <section
        className="bg-transparent text-header rounded-lg p-2 mt-5
        lg:w-4/5 md:w-3/4 w-full  min-h-[12rem]"
      >
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-header">
          Nutrition Facts
        </h2>
        <div className="grid grid-cols-2 gap-2 w-full mt-4 text-header text-xs">
          {/* Calories */}
          <div className="grow flex-col p-3 bg-background-alt rounded-lg">
            <p className="font-bold">{nutrients?.[0]?.amount}</p>
            <p>{nutrients?.[0]?.unit}</p>
          </div>
          {/* Carbs */}
          <div className="grow flex-col p-3 bg-background-alt  rounded-lg">
            <p className="font-bold">
              {nutrients?.[3]?.amount}
              {nutrients?.[3]?.unit}
            </p>
            <p>Carbs</p>
          </div>
          {/* Fat */}
          <div className="grow flex-col p-3 bg-background-alt rounded-lg">
            <p className="font-bold">
              {' '}
              {nutrients?.[1]?.amount} {nutrients?.[1]?.unit}
            </p>
            <p>Fat</p>
          </div>
          {/* Protein */}
          <div className="grow flex-col p-3 bg-background-alt  rounded-lg">
            <p className="font-bold">
              {nutrients?.[8]?.amount} {nutrients?.[8]?.unit}
            </p>
            <p>Protein</p>
          </div>
        </div>

        <div className=" md:w-2/5 w-3/5 h-1 bg-body-bold ml-1 mt-6 rounded"></div>
        <p className="lg:text-base md:text-sm text-xs ml-2 mt-2">
          per {weightPerServing?.amount}
          {weightPerServing?.unit} serving (recipe makes {servings})
        </p>

        {/* Extended Nutritions */}
        <div className="w-full mt-5 text-header lg:text-sm md:text-sm text-xs ">
          {/* %DV */}
          <div className="flex w-full p-2">
            <div className="flex-row w-full"></div>
            <div className="flex-row w-full text-right">% Daily Value*</div>
          </div>

          {/* Saturated Fat */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Saturated Fat</b>: {nutrients?.[2]?.amount}
              {nutrients?.[2]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[2]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Sodium */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Sodium</b>: {nutrients?.[7]?.amount}
              {nutrients?.[7]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[7]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Cholesterol */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Cholesterol</b>: {nutrients?.[6]?.amount}
              {nutrients?.[6]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[6]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Net Carbs */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Net Carbs</b>: {nutrients?.[4]?.amount}
              {nutrients?.[4]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[4]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Dietary Fiber */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Dietary Fiber</b>: {nutrients?.[21]?.amount}
              {nutrients?.[21]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[21]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Sugar */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Sugar</b>: {nutrients?.[5]?.amount}
              {nutrients?.[5]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[5]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Protein */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Protein</b>: {nutrients?.[8]?.amount}
              {nutrients?.[8]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[8]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Vitamin C */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Vitamin C</b>: {nutrients?.[9]?.amount}
              {nutrients?.[9]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[9]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Calcium */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Calcium</b>: {nutrients?.[27]?.amount}
              {nutrients?.[27]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[27]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Iron */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Iron</b>: {nutrients?.[19]?.amount}
              {nutrients?.[19]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[19]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Potassium */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              <b>Potassium</b>: {nutrients?.[16]?.amount}
              {nutrients?.[16]?.unit}{' '}
            </div>
            <div className="flex-row w-full text-right">
              {nutrients?.[16]?.percentOfDailyNeeds}%
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex w-full p-2 border-t-2 border-background-alt">
            <div className="flex-row w-full">
              * Percentage Daily Values are based on a 2,000 calorie diet
            </div>
          </div>
        </div>
      </section>

      <div className="flex lg:hidden mt-4 md:mt-8 w-full sm:w-1/2 lg:w-1/3 gap-2 text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
        <button class="w-1/2 text-header p-2 rounded-lg hover:shadow-md">
          Back
        </button>
        <button
          class={`w-1/2 text-header p-2 rounded-lg hover:shadow-md ${
            isSaved ? 'bg-highlight-alt' : 'bg-background-bright '
          }`}
          onClick={handleSaveRecipe}
        >
          {isSaved ? 'Unsave' : 'Save'}
        </button>
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
  servings: PropTypes.number,
}
export default Details
