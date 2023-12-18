import React, { useEffect, useState } from 'react'
import saveIcon from '../../../assets/icons/save.svg'
import savedIcon from '../../../assets/icons/saved.svg'
import tag from '../../../assets/icons/tag.svg'

function Overview({
  recipeId,
  recipeName,
  recipeImage,
  servings,
  dietTags,
  readyInMinutes,
  isSaved,
  handleSaveRecipe,
}) {
  return (
    <div className="flex w-full flex-wrap justify-center">
      {/* Recipe Picture */}
      <img
        src={recipeImage}
        alt="Recipe picture"
        className="h-full lg:w-4/5 md:w-3/4 w-full rounded-lg"
      />

      {/* Recipe Title and Save Button*/}
      <div
        className="w-full lg:w-4/5 md:w-3/4 lg:mx-4 mt-4 lg:mt-8
        flex lg:flex-nowrap flex-wrap"
      >
        {/* Title */}
        <div className="flex-row lg:w-10/12 md:w-10/12 sm:w-full w-full">
          <h1 className="3xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold text-header">
            {recipeName}
          </h1>
          <p
            className="lg:mt-6 md:mt-4 sm:mt-3 mt-3 text-body-bold 
              2xl:text-3xl xl:text-2xl md:text-xl text-sm"
          >
            Makes {servings} servings&emsp;|&emsp;Ready in {readyInMinutes}{' '}
            minutes
          </p>
        </div>

        {/* Save Button */}
        <div className="hidden lg:block relative w-1/5">
          <img
            src={isSaved ? savedIcon : saveIcon}
            className="w-10 2xl:w-12 3xl:w-16 cursor-pointer absolute right-0 top-2"
            onClick={handleSaveRecipe}
          />
        </div>
      </div>

      {/* Labels */}
      <div
        className="text-body-bold 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-xs text-highlight
        w-full lg:w-4/5 md:w-3/4 sm:w-full lg:mx-4 md:mt-10 mt-4"
      >
        {dietTags.map((item, index) => {
          return (
            <span className="lg:leading-10 md:leading-8 leading-6 whitespace-nowrap mr-3">
              <img src={tag} className="inline w-4 md:w-6 2xl:w-8" />
              <span className="whitespace-nowrap ml-1 ">{item}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Overview
