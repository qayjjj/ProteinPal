import React, { useState } from 'react'
import UnitSelect from '../../../../components/UnitSelect/UnitSelect'

const Advanced = ({ onValueChange }) => {
  const [servingType, setServingType] = useState('size')
  const handleServingTypeChange = (e) => {
    setServingType(e.target.value)
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onValueChange(value);
  };

  return (
    <div className="mt-16 text-body-bold">
      <h2 className="text-3xl font-semibold text-header">Advanced</h2>
      {/* <div className="flex items-center mt-6">
        <h3>Weight after cooking</h3>
        <div className="flex items-center ml-16">
          <input
            type="number"
            className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm"
          />
          <UnitSelect classNames="ml-2" />
        </div>
      </div> */}
      <div className="flex items-center mt-6">
        <div className="flex items-center">
          <h3>Number of Servings Per Recipe</h3>
          {/* <select
            value={servingType}
            onChange={handleServingTypeChange}
            className="ml-2 border-[1px] border-background-bright p-1 rounded-md bg-background outline-0 text-sm"
          >
            <option value="size">size</option>
            <option value="count">count</option>
          </select> */}
        </div>
        <div className="flex items-cente ml-[5.25rem]">
          <input
            type="number"
            onChange={handleInputChange}
            className="border-b border-background-bright bg-transparent outline-none w-20 text-center text-sm"
          />
          {/* <UnitSelect
            classNames={`ml-2 ${servingType === 'count' && 'hidden'}`}
          /> */}
        </div>
      </div>
    </div>
  )
};

export default Advanced;