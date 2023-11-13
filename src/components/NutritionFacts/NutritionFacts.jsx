function NutritionFacts() {
  return (
    <div className="flex flex-col bg-background-alt w-1/4 px-6 py-10">
      <h1 className="text-3xl text-body-bold font-bold">Nutrition Facts</h1>

      {/* Serving size & Calories */}
      <div className="border-t-8 border-b-4 border-highlight mt-4">
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
        <p className="text-body-bold text-xs text-right">%Daily Value*</p>

        <div className="flex justify-between">
          <div className="flex">
            <h3 className="font-bold text-body-bold">Total Fat</h3>
            <span className="ml-1">18.3 g</span>
          </div>
          <span className="font-bold text-body-bold">28 %</span>
        </div>
      </div>
    </div>
  )
}

export default NutritionFacts
