import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './index.css'

function RecipeCard({
  backgroundColor,
  headerTextColor,
  recipeName,
  recipeImage,
  recipeId,
  classNames,
}) {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()
    navigate(`/recipe?id=${recipeId}`)
  }

  return (
    <div
      className={`shrink-0 md:w-64 py-2 px-3 md:p-6 md:pb-3 text-center rounded md:rounded-xl cursor-pointer ${backgroundColor} ${classNames}`}
      onClick={handleClick}
    >
      <div className="recipe-image h-[4.5rem] md:w-full md:h-36 overflow-hidden flex items-center">
        <img src={recipeImage} className="rounded-sm md:rounded-md w-full" />
      </div>
      <div className="recipe-name-container w-full h-8 md:h-12">
        <p
          className={`${headerTextColor} w-full font-bold text-[0.6rem] md:text-sm mt-1 md:mt-2`}
        >
          {recipeName}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard
