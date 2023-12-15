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

      <div className="flex justify-between h-76 flex-wrap">

        {/* Recipe Picture */}
        <img src={recipeImage} alt="Recipe picture" className="h-full flex-col lg:w-2/5 w-full" />

        {/* Recipe Title and Save Button*/}
        <div className="flex-col w-full lg:w-[55%] lg:mx-4 my-4 mt-10">
          <div className="flex md:flex-nowrap flex-wrap">

            {/* Title */}
            <h1 className="flex-row text-5xl font-bold text-header w-10/12">{recipeName}</h1>

            {/* Save Button */}
            <div className="flex-row min-w-[30px] w-3/10 md:ml-10 sm:mt-0 mt-10">
              <img
                src={isSaved ? savedIcon : saveIcon}
                className="w-12 h-12 cursor-pointer"
                onClick={handleSaveRecipe}
              />
            </div>
          </div>
        </div>


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