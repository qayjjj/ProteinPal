import React, { useState, useEffect } from 'react'
import UnitSelect from '../../../../components/UnitSelect/UnitSelect'

const Advanced = ({
  weightAmount,
  setWeightAmount,
  weightUnit,
  setWeightUnit,
  servingAmount,
  setServingAmount,
  servingUnit,
  setServingUnit,
  servingCount,
  setServingCount,
  servingType,
  setServingType,
  onValueChange,
  nutrients,
  calculateNutritionPerServing,
}) => {
  const handleServingChange = (e) => {
    const value = parseInt(e.target.value, 10)
    servingType === 'size' ? setServingAmount(value) : setServingCount(value)
  }

  useEffect(() => {
    calculateNutritionPerServing(nutrients, 'calories', 'Calories')
    calculateNutritionPerServing(nutrients, 'fat', 'Fat')
    calculateNutritionPerServing(nutrients, 'satFat', 'Saturated Fat')
    calculateNutritionPerServing(nutrients, 'transFat', 'Trans Fat')
    calculateNutritionPerServing(nutrients, 'chol', 'Cholesterol')
    calculateNutritionPerServing(nutrients, 'sodium', 'Sodium')
    calculateNutritionPerServing(nutrients, 'carb', 'Carbohydrates')
    calculateNutritionPerServing(nutrients, 'fiber', 'Fiber')
    calculateNutritionPerServing(nutrients, 'sugar', 'Sugar')
    calculateNutritionPerServing(nutrients, 'protein', 'Protein')
    calculateNutritionPerServing(nutrients, 'vitD', 'Vitamin D')
    calculateNutritionPerServing(nutrients, 'calcium', 'Calcium')
    calculateNutritionPerServing(nutrients, 'iron', 'Iron')
    calculateNutritionPerServing(nutrients, 'potassium', 'Potassium')
  }, [servingCount, servingAmount, weightAmount, servingUnit, weightUnit]);

  return (
    <div className="mt-8 text-body-bold">
      <h2 className="text-3xl font-semibold text-header">Advanced</h2>
      <div className="flex items-center mt-6">
        <div className="flex items-center">
          <h3>Serving</h3>
          <select
            value={servingType}
            onChange={(e) => setServingType(e.target.value)}
            className="ml-2 border-[1px] border-background-bright p-1 rounded-md bg-background outline-0 shadow text-sm"
          >
            <option value="size">size</option>
            <option value="count">count</option>
          </select>
        </div>
        <div className="flex items-cente ml-[5.25rem]">
          <input
            type="number"
            min="1"
            value={servingType === 'size' ? servingAmount : servingCount}
            onChange={(e) => handleServingChange(e)}
            className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm"
          />
          <UnitSelect
            unit={servingUnit}
            setUnit={setServingUnit}
            classNames={`ml-2 ${servingType === 'count' && 'hidden'}`}
          />
        </div>
      </div>

      <div
        className={`flex items-center mt-6 ${servingType === 'count' && 'hidden'
          }`}
      >
        <h3>Weight after cooking</h3>
        <div className="flex items-center ml-16">
          <input
            type="number"
            min="1"
            value={weightAmount}
            className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm"
            onChange={(e) => setWeightAmount(e.target.value)}
          />
          <UnitSelect
            classNames="ml-2"
            unit={weightUnit}
            setUnit={setWeightUnit}
          />
        </div>
      </div>
    </div>
  )
}

export default Advanced
