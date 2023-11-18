import PropTypes from 'prop-types'
import { useState } from 'react'
import leftArrowIcon from '../../assets/icons/leftArrow.svg'
import rightArrowIcon from '../../assets/icons/rightArrow.svg'
import RecipeCard from '../RecipeCard/RecipeCard'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Carousel({
  backgroundColor,
  headerTextColor,
  bodyTextColor,
  arrowColor,
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
        {list.map((i) => (
          <RecipeCard
            backgroundColor={backgroundColor}
            headerTextColor={headerTextColor}
            bodyTextColor={bodyTextColor}
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
}