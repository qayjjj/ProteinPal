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
    <div className="pt-12 pb-4 place-self-center grid justify-items-center w-full">
      <p className="text-xl font-semibold text-body-bold">Enter an amount</p>

      <div className="mt-8 flex items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value)
            setSelectedIngredient((prev) => ({ ...prev, amount }))
          }}
          className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm mr-2"
        />
        <UnitSelect
          unit={unit}
          setUnit={handleSetUnit}
          units={ingredientUnits}
        />
      </div>

      <div className="mt-8 w-11/12 flex justify-between">
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
