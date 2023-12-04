import React, { useState } from 'react'
import dot from '../../../assets/icons/dot.svg'
import search from '../../../assets/icons/search.svg'
import edit from '../../../assets/icons/edit.svg'
import SearchResults from './SearchResults/SearchResults'
import Advanced from './Advanced/Advanced'

const list = [
  '2 oz Red Onion',
  '4 oz Carrots',
  '4 oz Green Beans',
  '15 ml Olive Oil',
]

export default function Details() {
  const [name, setName] = useState('New Recipe')

  const handleNameChange = (e) => {
    let newName = ''
    while (newName === '') {
      newName = prompt('Enter recipe name')
      if (newName === '') {
        alert('Please enter a name!')
      }
    }
    setName(newName)
  }

  return (
    <div className="grow">
      <div className="text-5xl font-bold text-header flex">
        <h1>{name}</h1>

        <img
          src={edit}
          className="w-8 cursor-pointer ml-4"
          onClick={handleNameChange}
        />
      </div>

      {/* Ingredients */}
      <div className="mt-4 text-body-bold">
        {list.map((item, index) => {
          return (
            <span className="leading-10 whitespace-nowrap mr-6">
              <img src={dot} className="px-0 w-6 h-6 inline" />
              <span className="whitespace-nowrap">{item}</span>
            </span>
          )
        })}
      </div>

      {/* Search */}
      <div className="mt-8 border-[1px] border-header h-12 rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <input type="text" className="w-full outline-none ml-2 bg-background" />
      </div>

      <SearchResults />
      <Advanced />
    </div>
  )
}
