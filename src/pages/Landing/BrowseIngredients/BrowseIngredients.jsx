import React from 'react'
import search from '../../../assets/icons/search.svg'
import Carousel from '../../../components/Carousel/Carousel'

const list = [1, 2, 3, 4]

export default function BrowseIngredients() {
  return (
    <div className="py-16 px-40 bg-background align-centers">
      <h1 className="text-center text-4xl font-bold text-body-bold">
        Find recipes using the ingredients you already have
      </h1>
      <div className="mx-auto mt-10 border-[1px] h-12 w-2/3 rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        <input type="text" className="w-full outline-none bg-background ml-2" />
      </div>

      {/* Recipes */}
      <div className="w-full grid justify-items-center relative mt-16">
        <Carousel
          backgroundColor="bg-body-bold"
          headerTextColor="text-background-alt"
          bodyTextColor="text-background-alt"
        />
      </div>
    </div>
  )
}
