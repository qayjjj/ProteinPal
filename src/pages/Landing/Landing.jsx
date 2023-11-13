import Navigation from '../../components/Navigation/Navigation'
import BrowseCuisines from './BrowseCuisines/BrowseCuisines'
import BrowseIngredients from './BrowseIngredients/BrowseIngredients'
import ExploreAllRecipes from './ExploreAllRecipes/ExploreAllRecipes'
import TrackMacros from './TrackMacros/TrackMacros'

function Landing() {
  return (
    <div>
      <Navigation />
      <ExploreAllRecipes />
      <TrackMacros />
      <BrowseIngredients />
      <BrowseCuisines />
    </div>
  )
}

export default Landing
