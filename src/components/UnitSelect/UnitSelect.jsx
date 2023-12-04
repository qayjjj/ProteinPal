import React, { useState } from 'react'

const UnitSelect = ({ classNames }) => {
  const [selectedUnit, setSelectedUnit] = useState('oz')

  const unitOptions = [
    { value: 'oz', label: 'oz (Ounces)' },
    { value: 'ml', label: 'ml (Milliliters)' },
    { value: 'g', label: 'g (Grams)' },
    { value: 'lb', label: 'lb (Pounds)' },
    { value: 'kg', label: 'kg (Kilograms)' },
    { value: 'tsp', label: 'tsp (Teaspoons)' },
    { value: 'tbsp', label: 'tbsp (Tablespoons)' },
  ]

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value)
  }

  return (
    <select
      id="unitSelect"
      value={selectedUnit}
      onChange={handleUnitChange}
      className={`border-[1px] border-background-bright p-1 rounded-md bg-background text-sm ${classNames}`}
    >
      {unitOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default UnitSelect
