import React from 'react'
import search from '../../../assets/icons/search.svg'
import Carousel from '../../../components/Carousel/Carousel'

const list = [1, 2, 3, 4]

export default function BrowseCuisines() {
  return (
    <div className="py-16 px-40 bg-background-bright">
      <h1 className="text-center text-4xl font-bold text-header">
        Browse recipes based on your favorite cuisines
      </h1>
      <div className="mx-auto mt-10 border-[1px] h-12 w-2/3 bg-background rounded-md flex items-center p-2">
        <img src={search} alt="Search Icon" className="w-6 h-6" />
        {/* <input type="text" className="" /> */}
      </div>
      <div className="w-full grid justify-items-center relative mt-16">
        <Carousel
          backgroundColor="bg-background-alt"
          headerTextColor="text-background-bright"
          bodyTextColor="text-body-bold"
        />
      </div>
    </div>
  )
}
