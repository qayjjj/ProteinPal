import React, { useEffect, useState } from 'react'

const UnitSelect = ({ classNames, unit, setUnit, units }) => {
  const [unitOptions, setUnitOptions] = useState([
    'oz',
    'ml',
    'g',
    'lb',
    'kg',
  ])

  useEffect(() => {
    units && setUnitOptions(units)
  }, [units])

  return (
    <select
      id="unitSelect"
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className={`border-[1px] border-background-bright p-1 rounded-md bg-inherit shadow text-sm ${classNames}`}
    >
      {unitOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default UnitSelect
