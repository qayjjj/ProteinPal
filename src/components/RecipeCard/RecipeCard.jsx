import PropTypes from 'prop-types'
import sample from '../../assets/images/sample.png'
import { useNavigate } from 'react-router-dom'

function RecipeCard({ backgroundColor, headerTextColor, bodyTextColor, recipeName, recipeImage, recipeId}) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/recipe?id=${recipeId}`);
  }

  return (
    <div className={`w-64 p-6 text-center rounded-xl ${backgroundColor} cursor-pointer`} onClick={handleClick}>
      <img src={recipeImage} className="rounded-md" />
      <p className={`${headerTextColor} font-bold mt-2`}>{recipeName}</p>

      {/* Nutrition Facts */}
      <div className={bodyTextColor}>
        <span>230</span>
        <span className="ml-1 text-sm">kcal</span>
        <span className="ml-2">19g</span>
        <span className="ml-1 text-sm">protein</span>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  backgroundColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  bodyTextColor: PropTypes.string,
  recipeName: PropTypes.string,
  recipeImage: PropTypes.string,
}

export default RecipeCard
