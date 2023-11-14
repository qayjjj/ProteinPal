import React from 'react'
import dot from '../../../assets/icons/dot.svg'

const sampleIngredients = [
  '2 tbsp vegetable oil or beef fat',
  '1-1.5kg/2lb 4-3lb 5oz sirloin of beef joint',
  '1 glass red wine',
  '400g can beef consommé',
]

export default function Details() {
  return (
    <div className="flex w-full mt-10">
      {/* Ingredients */}
      <div className="bg-background-alt px-8 py-10 w-1/3 min-h-[30rem]">
        <h2 className="text-5xl font-bold text-header">Ingredients</h2>
        <div className="mt-10 flex flex-col">
          {sampleIngredients.map((item, index) => (
            <div className="flex items-start">
              <img src={dot} className="w-8 h-8 inline leading-10 mt-1" />
              <p className="inline text-header text-xl leading-10">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Macro Information */}
      <div className="flex-1 ml-12 bg-header px-20 py-12 w-1/4 min-h-[30rem] text-background-alt">
        <h2 className="text-5xl font-bold text-background-alt">
          Macro Information
        </h2>

        {/* Macros */}
        <div className="flex items-center justify-between h-full items-center">
          <div>
            <h3 className="text-4xl font-bold leading-[4rem]">331 kcal</h3>
            <h4 className="text-4xl font-bold leading-[4rem]">Protein 36 g</h4>
            <h4 className="text-4xl font-bold leading-[4rem]">Fat 18 g</h4>
            <h4 className="text-4xl font-bold leading-[4rem]">Carbs 1 g</h4>
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
              <div>131 mg</div>
              <div>342 mg</div>
              <div>32 mg</div>
              <div>48 mg</div>
              <div>870 mg</div>
              <div>4 mg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
