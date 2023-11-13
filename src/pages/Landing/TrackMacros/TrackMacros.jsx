import React from 'react'
import macros from '../../../assets/images/macros.svg'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function TrackMacros() {
  return (
    <div className="pt-20 px-40 bg-background-alt relative">
      <h1 className="mr-20 text-right text-4xl font-bold text-body-bold">
        Keep track of your nutrition
      </h1>
      <img src={macros} alt="Macros Data Visualization" className="w-7/12" />
      <div className="absolute bottom-28 right-52">
        <RecipeCard
          backgroundColor="bg-background-bright"
          headerTextColor="text-header"
          bodyTextColor="text-header"
        />
      </div>
    </div>
  )
}
