import { useEffect, useState } from 'react'
import leftArrowIcon from '../../assets/icons/leftArrow.svg'
import rightArrowIcon from '../../assets/icons/rightArrow.svg'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function Carousel({
  backgroundColor,
  headerTextColor,
  recipes,
}) {
  const [showArrows, setShowArrows] = useState(true)
  const [currentStart, setCurrentStart] = useState(0)
  const cardsToShow = 4

  useEffect(() => {
    recipes.length < 5 && setShowArrows(false)
  }, [recipes])

  let previousSlide = () => {
    const newStart =
      currentStart - cardsToShow >= 0
        ? currentStart - cardsToShow
        : Math.floor(recipes.length / cardsToShow)
    setCurrentStart(newStart)
  }

  let nextSlide = () => {
    const newStart =
      currentStart + cardsToShow < recipes.length
        ? currentStart + cardsToShow
        : 0

    setCurrentStart(newStart)
  }
  return (
    <div className="w-11/12 overflow-hidden">
      <div
        className="flex gap-[1.05rem] transition ease-out duration-40"
        style={{
          transform: `translateX(-${currentStart * (100 / cardsToShow)}%)`,
        }}
      >
        {recipes
          ?.slice(currentStart, currentStart + cardsToShow)
          .map((item) => (
            <RecipeCard
              key={item.id}
              backgroundColor={backgroundColor}
              headerTextColor={headerTextColor}
              recipeImage={item.image}
              recipeName={item.title}
              recipeId={item.id}
            />
          ))}
      </div>

      <button
        className={`absolute top-28 left-0 ${!showArrows && 'hidden'}`}
        onClick={previousSlide}
      >
        <img src={leftArrowIcon} className="w-8 h-8 text-black fill-current" />
      </button>
      <button
        className={`absolute top-28 right-0 ${!showArrows && 'hidden'}`}
        onClick={nextSlide}
      >
        <img src={rightArrowIcon} className="w-8 h-8" />
      </button>
    </div>
  )
}
