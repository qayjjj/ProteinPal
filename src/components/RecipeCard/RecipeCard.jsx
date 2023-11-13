import sample from './sample.png'

function RecipeCard() {
  return (
    <div className="bg-background-alt w-64 p-6 text-center rounded-xl">
      <img src={sample} className="rounded-md" />
      <p className="font-bold text-highlight-bright mt-2">Recipe Name</p>

      {/* Nutrition Facts */}
      <div className="text-body-bold">
        <span>230</span>
        <span className="ml-1 text-sm">kcal</span>
        <span className="ml-2">19g</span>
        <span className="ml-1 text-sm">protein</span>
      </div>
    </div>
  )
}

export default RecipeCard
