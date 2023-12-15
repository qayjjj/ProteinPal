import React from 'react'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import IngredientCard from '../../components/IngredientCard/IngredientCard'
import search from '../../assets/icons/search.svg'


export default function Ingredients() {
  const [searchValue, setSearchValue] = useState('')
  const list = [1, 2, 3]

  return (
    <div className="bg-background">
      <Navigation/>
      <h1 className="text-center text-4xl font-bold text-header mt-10">
        Search Ingredient Database
      </h1>

      <div className="mx-auto mt-10 border-[1px] h-12 w-2/3 bg-background rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <input
          type="text"
          className="w-full outline-none bg-background ml-2"
          value={searchValue}
        />
      </div>
      <div className="w-full py-20 px-32 grid grid-cols-4 gap-4">
        {list.map((item) => (
          <IngredientCard
          name={item}
          />
        ))}
      </div>
    </div>
  )
}
