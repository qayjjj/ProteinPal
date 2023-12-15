import React, { useState } from 'react'
import PropTypes from 'prop-types'
import saveIcon from '../../../assets/icons/save.svg'
import savedIcon from '../../../assets/icons/saved.svg'
import dot from '../../../assets/icons/dot.svg'


function Overview({recipeName, recipeImage, servings, dietTags}) {
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveRecipe = () => {
    setIsSaved((prev) => !prev)
  }

  return (
    <div>
      <div className="flex justify-between h-76">
        <img src={recipeImage} alt="Recipe picture" className="h-full flex-col lg:w-1/3 w-full" />

        <div className="flex-1 h-full px-12 py-6 relative">
          <h1 className="text-5xl flex-col font-bold text-header w-10/12">{recipeName}</h1>

          {/* Labels */}
          <div className="mt-8 text-body-bold w-5/6 flex-col">
            {dietTags.map((item, index) => {
              return (
                <span className="leading-10 whitespace-nowrap mr-6">
                  <img src={dot} className="px-0 w-8 h-8 inline" />
                  <span className="whitespace-nowrap">{item}</span>
                </span>
              )
            })}
          </div>

          <p className="mt-6 font-bold text-body-bold text-2xl">{servings} servings</p>

          {/* Save button */}
          <img
            src={isSaved ? savedIcon : saveIcon}
            className="absolute top-0 right-12 w-12 h-12 cursor-pointer"
            onClick={handleSaveRecipe}
          />
        </div>
      </div>
    </div>
  )
}
Overview.propTypes = {
  recipeName: PropTypes.string,
  recipeImage: PropTypes.string,
  servings: PropTypes.number,
  dietTags: PropTypes.array
}
export default Overview