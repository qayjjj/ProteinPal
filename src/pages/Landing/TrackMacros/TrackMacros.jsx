import React from 'react'
import macros from '../../../assets/images/macros.svg'
import sample from '../../../assets/images/sample.jpeg'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function TrackMacros() {
  return (
    <div className="pt-6 pb-4 px-8 md:pt-20 md:px-40 bg-background-alt relative">
      <h1 className="md:mr-20 text-right text-lg sm:text-xl md:text-4xl font-bold text-body-bold ">
        Keep track of your nutrition
      </h1>
      <img
        src={macros}
        alt="Macros Data Visualization"
        className="w-[60%] mt-4 -ml-4 md:ml-0 d:mt-0 md:w-7/12"
      />
      <div className="absolute bottom-7 right-8 md:bottom-28 md:right-52">
        <RecipeCard
          backgroundColor="bg-background-bright"
          headerTextColor="text-header"
          recipeImage={sample}
          recipeName="Butternut Lasagna with Mushrooms and Sage"
          classNames="track-macros-recipe-card"
        />
      </div>
    </div>
  )
}
