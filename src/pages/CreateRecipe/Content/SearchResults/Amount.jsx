import React, { useState, useEffect } from 'react'
import UnitSelect from '../../../../components/UnitSelect/UnitSelect'

export default function Amount({
  onCancel,
  ingredientUnits,
  setSelectedIngredient,
  handleCalculateNewIngredient,
}) {
  const [amount, setAmount] = useState(0)
  const [unit, setUnit] = useState('g')

  useEffect(() => {
    setSelectedIngredient((prev) => ({ ...prev, amount: amount, unit: unit }))
  }, [unit, amount])

  const handleSetUnit = (unit) => {
    setUnit(unit)
    setSelectedIngredient((prev) => ({ ...prev, unit }))
  }

  return (
    <div className="pt-6 md:pt-10 lg:pt-12 pb-4 place-self-center grid justify-items-center w-full">
      <p className="sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-body-bold">
        Enter an amount
      </p>

      <div className="mt-8 flex items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value)
            setSelectedIngredient((prev) => ({ ...prev, amount }))
          }}
          className="border-b border-background-bright bg-transparent outline-none w-10 md:w-16 lg:w-20 2xl:w-28 text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl mr-2"
        />
        <UnitSelect
          unit={unit}
          setUnit={handleSetUnit}
          units={ingredientUnits}
          classNames="text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl"
        />
      </div>

      <div className="mt-8 w-11/12 flex justify-between text-sm sm:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl">
        <button className="text-body-bold opacity-90" onClick={onCancel}>
          Go back
        </button>
        <button
          onClick={handleCalculateNewIngredient}
          className="font-semibold text-body-bold"
        >
          Add to Recipe
        </button>
      </div>
    </div>
  )
}
