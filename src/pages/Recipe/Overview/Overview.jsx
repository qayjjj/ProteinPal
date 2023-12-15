import React, { useState } from 'react'
import PropTypes from 'prop-types'
import saveIcon from '../../../assets/icons/save.svg'
import savedIcon from '../../../assets/icons/saved.svg'
import dot from '../../../assets/icons/dot.svg'
import tag from '../../../assets/icons/tag.svg'


function Overview({recipeName, recipeImage, servings, dietTags, readyInMinutes}) {
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveRecipe = () => {
    setIsSaved((prev) => !prev)
  }

  return (
    <div>

      <div className="flex justify-between h-76 flex-wrap">

        {/* Recipe Picture */}
        <img src={recipeImage} alt="Recipe picture" className="h-full flex-col lg:w-2/5 w-full rounded-lg" />

        {/* Recipe Title and Save Button*/}
        <div className="flex-col w-full lg:w-[55%] lg:mx-4 my-4 mt-10">
          <div className="flex md:flex-nowrap flex-wrap">

            {/* Title */}
            <div className="flex-row w-10/12">
              <h1 className="text-5xl font-bold text-header ">{recipeName}</h1>
              <p className="mt-6 text-body-bold text-xl">Makes {servings} servings &emsp; | &emsp; Ready in {readyInMinutes} minutes</p>
            </div>

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
        <div className="mt-8 text-body-bold w-10/12 flex-col lg:m-auto lg:text-center lg:mt-12">
          <span className="leading-10 whitespace-nowrap mr-6">                
            <img src={tag} className="px-0 w-8 h-8 inline" />
          </span>
          {dietTags.map((item, index) => {
            return (
              <span className="leading-10 whitespace-nowrap mr-6">
                {index !== 0 &&
                <img src={dot} className="px-0 w-8 h-8 inline" />
                }
                <span className="whitespace-nowrap">{item}</span>
              </span>
            )
          })}
        </div>

      </div>
    </div>
  )
}
Overview.propTypes = {
  recipeName: PropTypes.string,
  recipeImage: PropTypes.string,
  servings: PropTypes.number,
  dietTags: PropTypes.array,
  readyInMinutes: PropTypes.number
}
export default Overview