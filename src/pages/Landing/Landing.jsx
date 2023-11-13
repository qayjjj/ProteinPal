import Footer from '../../components/Footer/Footer'
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
      <Footer />
    </div>
  )
}

export default Landing
