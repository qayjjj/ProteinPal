const NutritionFacts = ({ nutritionData, servingRatio }) => {
  const sumCalories =
    nutritionData &&
    nutritionData.calories &&
    nutritionData.calories.amount.length > 0
      ? Math.round(
          nutritionData.calories.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumFat =
    nutritionData && nutritionData.fat && nutritionData.fat.amount.length > 0
      ? Math.round(
          nutritionData.fat.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalFat =
    nutritionData &&
    nutritionData.fat &&
    nutritionData.fat.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.fat.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumSatFat =
    nutritionData &&
    nutritionData.satFat &&
    nutritionData.satFat.amount.length > 0
      ? Math.round(
          nutritionData.satFat.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalSatFat =
    nutritionData &&
    nutritionData.satFat &&
    nutritionData.satFat.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.satFat.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumTransFat =
    nutritionData &&
    nutritionData.transFat &&
    nutritionData.transFat.amount.length > 0
      ? Math.round(
          nutritionData.transFat.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumChol =
    nutritionData && nutritionData.chol && nutritionData.chol.amount.length > 0
      ? Math.round(
          nutritionData.chol.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalChol =
    nutritionData &&
    nutritionData.chol &&
    nutritionData.chol.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.chol.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumSodium =
    nutritionData &&
    nutritionData.sodium &&
    nutritionData.sodium.amount.length > 0
      ? Math.round(
          nutritionData.sodium.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalSodium =
    nutritionData &&
    nutritionData.sodium &&
    nutritionData.sodium.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.sodium.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumCarb =
    nutritionData && nutritionData.carb && nutritionData.carb.amount.length > 0
      ? Math.round(
          nutritionData.carb.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalCarb =
    nutritionData &&
    nutritionData.carb &&
    nutritionData.carb.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.carb.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumFiber =
    nutritionData &&
    nutritionData.fiber &&
    nutritionData.fiber.amount.length > 0
      ? Math.round(
          nutritionData.fiber.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalFiber =
    nutritionData &&
    nutritionData.fiber &&
    nutritionData.fiber.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.fiber.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumSugar =
    nutritionData &&
    nutritionData.sugar &&
    nutritionData.sugar.amount.length > 0
      ? Math.round(
          nutritionData.sugar.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalSugar =
    nutritionData &&
    nutritionData.sugar &&
    nutritionData.sugar.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.sugar.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumProtein =
    nutritionData &&
    nutritionData.protein &&
    nutritionData.protein.amount.length > 0
      ? Math.round(
          nutritionData.protein.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalProtein =
    nutritionData &&
    nutritionData.protein &&
    nutritionData.protein.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.protein.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumVitD =
    nutritionData && nutritionData.vitD && nutritionData.vitD.amount.length > 0
      ? Math.round(
          nutritionData.vitD.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalVitD =
    nutritionData &&
    nutritionData.vitD &&
    nutritionData.vitD.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.vitD.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumCalcium =
    nutritionData &&
    nutritionData.calcium &&
    nutritionData.calcium.amount.length > 0
      ? Math.round(
          nutritionData.calcium.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalCalcium =
    nutritionData &&
    nutritionData.calcium &&
    nutritionData.calcium.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.calcium.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumIron =
    nutritionData && nutritionData.iron && nutritionData.iron.amount.length > 0
      ? Math.round(
          nutritionData.iron.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalIron =
    nutritionData &&
    nutritionData.iron &&
    nutritionData.iron.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.iron.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  const sumPotassium =
    nutritionData &&
    nutritionData.potassium &&
    nutritionData.potassium.amount.length > 0
      ? Math.round(
          nutritionData.potassium.amount.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0
  const sumTotalPotassium =
    nutritionData &&
    nutritionData.potassium &&
    nutritionData.potassium.percentOfDailyNeeds.length > 0
      ? Math.round(
          nutritionData.potassium.percentOfDailyNeeds.reduce(
            (acc, currentValue) => acc + currentValue,
            0,
          ) / servingRatio,
        )
      : 0

  return (
    <div className="flex flex-col bg-background-alt mt-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[25%] h-min px-6 py-3 rounded-lg">
      <h1 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl  text-body-bold font-bold mt-4 lg:mt-8">
        Nutrition Facts
      </h1>

      {/* Serving size & Calories */}
      <div className="border-t-8 border-b-4 border-highlight mt-4 py-2">
        <div className="flex text-body-bold font-semibold sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl">
          <h2>Amount Per Serving</h2>
        </div>
        <div className="flex items-center justify-between text-body-bold font-bold text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl ">
          <h2>Calories</h2>
          <span>{sumCalories}</span>
        </div>
      </div>

      {/* Nutrition Details */}
      <div className="text-xs sm:text-sm md:text-base 2xl:text-lg">
        <p className="text-body-bold text-xs font-semibold text-right p-1">
          %Daily Value*
        </p>

        {/* Total Fat */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Total Fat</h3>
            <span className="ml-1">{sumFat} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalFat} %</span>
        </div>

        {/* Saturated Fat */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Saturated Fat</h3>
            <span className="ml-1">{sumSatFat} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalSatFat} %</span>
        </div>

        {/* Trans Fat */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Trans Fat</h3>
            <span className="ml-1">{sumTransFat} g</span>
          </div>
        </div>

        {/* Cholesterol */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Cholesterol</h3>
            <span className="ml-1">{sumChol} mg</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalChol} %</span>
        </div>

        {/* Sodium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Sodium</h3>
            <span className="ml-1">{sumSodium} mg</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalSodium} %</span>
        </div>

        {/* Total Carbohydrate */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Total Carbohydrate</h3>
            <span className="ml-1">{sumCarb} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalCarb} %</span>
        </div>

        {/* Dietary Fiber */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Dietary Fiber</h3>
            <span className="ml-1">{sumFiber} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalFiber} %</span>
        </div>

        {/* Added Sugars */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Sugars</h3>
            <span className="ml-1">{sumSugar} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalSugar} %</span>
        </div>

        {/* Protein */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Protein</h3>
            <span className="ml-1">{sumProtein} g</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalProtein} %</span>
        </div>

        {/* Vitamin D */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Vitamin D</h3>
            <span className="ml-1">{sumVitD} µg</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalVitD} %</span>
        </div>

        {/* Calcium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Calcium</h3>
            <span className="ml-1">{sumCalcium} mg</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalCalcium} %</span>
        </div>

        {/* Iron */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Iron</h3>
            <span className="ml-1">{sumIron} mg</span>
          </div>
          <span className="font-bold text-body-bold">{sumTotalIron} %</span>
        </div>

        {/* Potassium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Potassium</h3>
            <span className="ml-1">{sumPotassium} mg</span>
          </div>
          <span className="font-bold text-body-bold">
            {sumTotalPotassium} %
          </span>
        </div>

        <p className="mt-4 text-body-bold text-[0.6rem] md:text-[0.7rem] text-center p-1">
          * Percent Daily Values are based on a 2000 calorie diet
        </p>
      </div>
    </div>
  )
}

export default NutritionFacts
