import React from 'react'
import './index.css'
export default function IngredientCard({
  backgroundColor,
  headerTextColor,
  bodyTextColor,
  name,
  image,
  onClick,
}) {
  return (
    <div
      className={`p-4 text-left rounded-xl ${backgroundColor} cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-28 grid place-items-center bg-white rounded-md">
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
          alt="Ingredient image"
          className="max-h-full max-w-full"
        />
      </div>
      <p
        className={`${headerTextColor} mt-2 text-sm font-bold truncate ingredient-name`}
      >
        {name}
      </p>
    </div>
  )
}
