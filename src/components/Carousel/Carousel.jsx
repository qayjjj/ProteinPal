import PropTypes from 'prop-types'
import { useState } from 'react'
import leftArrowIcon from '../../assets/icons/leftArrow.svg'
import rightArrowIcon from '../../assets/icons/rightArrow.svg'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function Carousel({
  backgroundColor,
  headerTextColor,
  bodyTextColor,
  arrowColor,
  recipes
}) {
  let [current, setCurrent] = useState(0)
  const slides = 2

  let previousSlide = () => {
    if (current === 0) setCurrent(slides - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slides - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  // overflow-hidden border-2 grid grid-cols-4
  return (
    <div className="w-5/6 overflow-hidden">
      <div
        className="flex gap-[3.25rem] transition ease-out duration-40"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {recipes?.map((item) => (
          <RecipeCard
            backgroundColor="bg-background-alt"
            headerTextColor="text-header"
            bodyTextColor="text-header"
            recipeImage={item.image}
            recipeName={item.title}
            recipeId={item.id}
          />
        ))}
      </div>

      <button className="absolute top-28 left-0" onClick={previousSlide}>
        <img src={leftArrowIcon} className="w-8 h-8 text-black fill-current" />
      </button>
      <button className="absolute top-28 right-0" onClick={nextSlide}>
        <img src={rightArrowIcon} className="w-8 h-8" />
      </button>
    </div>
  )
}

RecipeCard.propTypes = {
  backgroundColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  bodyTextColor: PropTypes.string,
  arrowColor: PropTypes.string,
  recipes: PropTypes.array
}
