import Navigation from '../../components/Navigation/Navigation'
import Details from './Details/Details'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'

function CreateRecipe() {
  return (
    <div className="bg-background">
      <Navigation />
      <div className="py-28 px-36 flex gap-6">
        <Details />
        <NutritionFacts />
        <button>save</button>
      </div>
    </div>
  )
}

export default CreateRecipe
