import React from 'react'
import macros from '../../../assets/images/macros.svg'
import sample from '../../../assets/images/sample.jpeg'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'

export default function TrackMacros() {
  return (
    <div className="-z-50 p-8 pb-4 sm:px-16 sm:py-12 lg:py-10 lg:px-24 xl:pt-28 xl:px-32 bg-background-alt">
      <h1 className="md:mr-20 text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-body-bold">
        Keep track of your nutrition
      </h1>
      <div className="flex w-full">
        <img
          src={macros}
          alt="Macros Data Visualization"
          className="mt-4 -ml-4 md:ml-0 w-2/3 md:mt-8 md:w-7/12"
        />
        <div>
          <RecipeCard
            backgroundColor="bg-background-bright"
            headerTextColor="text-header"
            recipeImage={sample}
            recipeName="Butternut Lasagna with Mushrooms and Sage"
            classNames="track-macros-recipe-card ml-4 mt-8"
          />
        </div>
      </div>
    </div>
  )
}
