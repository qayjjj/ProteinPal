import React, { useState } from 'react'
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
  onValueChange,
}) => {
  const [servingType, setServingType] = useState('count')

  const handleServingChange = (e) => {
    const value = parseInt(e.target.value, 10)
    servingType === 'size' ? setServingAmount(value) : setServingCount(value)
  }

  return (
    <div className="mt-8 text-body-bold">
      <h2 className="text-3xl font-semibold text-header">Advanced</h2>
      <div className="flex items-center mt-6">
        <h3>Weight after cooking</h3>
        <div className="flex items-center ml-16">
          <input
            type="number"
            value={weightAmount}
            className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm"
            onChange={setWeightAmount}
          />
          <UnitSelect
            classNames="ml-2"
            unit={weightUnit}
            setUnit={setWeightUnit}
          />
        </div>
      </div>
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
    </div>
  )
}

export default Advanced
