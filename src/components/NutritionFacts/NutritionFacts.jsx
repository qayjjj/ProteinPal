function NutritionFacts() {
  return (
    <div className="flex flex-col bg-background-alt w-[21rem] h-min px-6 py-3 rounded-lg">
      <h1 className="text-3xl text-body-bold font-bold mt-8">
        Nutrition Facts
      </h1>

      {/* Serving size & Calories */}
      <div className="border-t-8 border-b-4 border-highlight mt-4 py-2">
        <div className="flex text-body-bold font-bold">
          <h2>Amount Per Serving</h2>
          <span className="ml-2">(4oz)</span>
        </div>
        <div className="flex items-center justify-between text-body-bold font-bold text-3xl">
          <h2>Calories</h2>
          <span>1774</span>
        </div>
      </div>

      {/* Nutrition Details */}
      <div>
        <p className="text-body-bold text-xs font-semibold text-right p-1">
          %Daily Value*
        </p>

        {/* Total Fat */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Total Fat</h3>
            <span className="ml-1">18.3 g</span>
          </div>
          <span className="font-bold text-body-bold">28 %</span>
        </div>

        {/* Saturated Fat */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Saturated Fat</h3>
            <span className="ml-1">2 g</span>
          </div>
          <span className="font-bold text-body-bold">10 %</span>
        </div>

        {/* Cholesterol */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Cholesterol</h3>
            <span className="ml-1">0 mg</span>
          </div>
          <span className="font-bold text-body-bold">0 %</span>
        </div>

        {/* Sodium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Sodium</h3>
            <span className="ml-1">70 mg</span>
          </div>
          <span className="font-bold text-body-bold">3 %</span>
        </div>

        {/* Total Carbohydrate */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Total Carbohydrate</h3>
            <span className="ml-1">333.2 g</span>
          </div>
          <span className="font-bold text-body-bold">111 %</span>
        </div>

        {/* Dietary Fiber */}
        <div className="flex justify-between ml-4 border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Dietary Fiber</h3>
            <span className="ml-1">34.6 g</span>
          </div>
          <span className="font-bold text-body-bold">13 %</span>
        </div>

        {/* Added Sugars */}
        <div className="ml-4 border-t border-background-bright p-1">
          <h3 className="text-body-bold">Includes - Added Sugars</h3>
        </div>

        {/* Protein */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Protein</h3>
            <span className="ml-1">71 g</span>
          </div>
          <span className="font-bold text-body-bold">142 %</span>
        </div>

        {/* Vitamin D */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Vitamin D</h3>
            <span className="ml-1">0 µg</span>
          </div>
          <span className="font-bold text-body-bold">0 %</span>
        </div>

        {/* Calcium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Calcium</h3>
            <span className="ml-1">179.1 mg</span>
          </div>
          <span className="font-bold text-body-bold">18 %</span>
        </div>

        {/* Iron */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Iron</h3>
            <span className="ml-1">13.8 mg</span>
          </div>
          <span className="font-bold text-body-bold">77 %</span>
        </div>

        {/* Potassium */}
        <div className="flex justify-between border-t border-background-bright p-1">
          <div className="flex">
            <h3 className="text-body-bold">Potassium</h3>
            <span className="ml-1">2203.2 mg</span>
          </div>
          <span className="font-bold text-body-bold">47 %</span>
        </div>

        <p className="mt-4 text-body-bold text-[0.7rem] text-center p-1">
          * Percent Daily Values are based on a 2000 calorie diet
        </p>
      </div>
    </div>
  )
}

export default NutritionFacts
