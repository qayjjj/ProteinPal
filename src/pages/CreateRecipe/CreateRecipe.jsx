import Navigation from '../../components/Navigation/Navigation'
import Details from './Details/Details'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'

function CreateRecipe() {
  return (
    <div className="bg-background">
      <Navigation />
      <div className="py-28 px-44 flex gap-10">
        <Details />
        <NutritionFacts />
      </div>
    </div>
  )
}

export default CreateRecipe
