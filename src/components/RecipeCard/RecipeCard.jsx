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
      className={`shrink-0 py-2 px-3 lg:p-3 xl:pb-2 2xl:p-4 2xl:pb-5 text-center rounded md:rounded-lg lg:rounded-xl cursor-pointer ${backgroundColor} ${classNames}`}
      onClick={handleClick}
    >
      <div className="recipe-image h-[4.5rem] md:w-full md:h-24 xl:h-[6.5rem] 2xl:h-36 3xl:h-52 rounded overflow-hidden flex items-center">
        <img src={recipeImage} className="rounded-sm md:rounded w-full" />
      </div>
      <div className="recipe-name-container w-full h-8 md:h-12 2xl:h-[3.5rem] 3xl:h-[3.75rem] overflow-hidden">
        <p
          className={`${headerTextColor} w-full font-bold text-[0.6rem] md:text-sm 2xl:text-base 3xl:text-lg  mt-1 xl:mt-2`}
        >
          {recipeName}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard
