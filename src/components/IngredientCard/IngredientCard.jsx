import React from 'react'

export default function IngredientCard({
  backgroundColor,
  headerTextColor,
  bodyTextColor,
}) {
  return (
    <div
      className={`p-6 text-left rounded-xl ${backgroundColor} cursor-pointer`}
    >
      <p className={`${headerTextColor} font-bold`}>Ingredient name</p>
      <p className={bodyTextColor}>230 kcal</p>
    </div>
  )
}
