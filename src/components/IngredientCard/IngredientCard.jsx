import React from 'react'
import './index.css'
export default function IngredientCard({
  backgroundColor,
  headerTextColor,
  classNames,
  name,
  image,
  onClick,
}) {
  return (
    <div
      className={`p-2 lg:py-3 xl:p-4 text-left rounded-lg lg:rounded-xl ${backgroundColor} ${classNames} cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full grid place-items-center bg-white rounded h-[75%] overflow-hidden">
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
          alt="Ingredient image"
          className="max-h-full max-w-full"
        />
      </div>
      <p
        className={`${headerTextColor} mt-2 text-xs font-bold truncate ingredient-name`}
      >
        {name}
      </p>
    </div>
  )
}
