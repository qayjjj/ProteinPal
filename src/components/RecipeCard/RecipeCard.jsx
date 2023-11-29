import PropTypes from 'prop-types'
import sample from '../../assets/images/sample.png'

function RecipeCard({ backgroundColor, headerTextColor, bodyTextColor, recipeName, recipeImage}) {
  return (
    <div className={`w-64 p-6 text-center rounded-xl ${backgroundColor}`}>
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
