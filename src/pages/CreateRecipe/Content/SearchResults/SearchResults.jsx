import React, { useRef, useEffect, useState } from 'react'
import IngredientCard from '../../../../components/IngredientCard/IngredientCard'
import './index.css'
import Amount from './Amount'

export default function SearchResults({
  searchResults,
  selectedIngredient,
  setSelectedIngredient,
  handleSelectIngredient,
  handleCalculateNewIngredient,
  ingredientUnits,
}) {
  const containerRef = useRef(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const [isEnteringAmount, setIsEnteringAmount] = useState(false)

  useEffect(() => {
    searchResults.length < 1 && setIsEnteringAmount(false)
    checkOverflow()
  }, [searchResults, isEnteringAmount])

  const checkOverflow = () => {
    const container = containerRef.current
    if (container.scrollHeight > container.clientHeight) {
      !isOverflow && setIsOverflow(true)
    } else {
      isOverflow && setIsOverflow(false)
    }
  }

  const handleSelect = (item) => {
    setIsEnteringAmount(true)
    setSelectedIngredient({ id: item.id, name: item.name })
    handleSelectIngredient(item.id)
  }

  const handleCancelSelect = () => {
    setIsEnteringAmount(false)
    setSelectedIngredient(null)
  }

  return (
    <div className="relative mt-6 2xl:mt-10 w-full">
      <div
        ref={containerRef}
        className={`w-full min-h-[8rem] max-h-[26.5rem] grid ${
          !isEnteringAmount &&
          searchResults.length !== 0 &&
          'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6'
        } ${isOverflow && 'overflow-y-scroll overflow-x-hidden'} ${
          isEnteringAmount && 'bg-background-alt'
        }
         
        gap-3 shadow-inner rounded-xl p-2 2xl:p-4`}
      >
        {isEnteringAmount ? (
          <Amount
            onCancel={handleCancelSelect}
            setSelectedIngredient={setSelectedIngredient}
            ingredientUnits={ingredientUnits}
            handleCalculateNewIngredient={handleCalculateNewIngredient}
          />
        ) : (
          <>
            {searchResults.length === 0 ? (
              <p className="place-self-center text-background-bright text-sm">
                No Results
              </p>
            ) : (
              searchResults.map((item) => (
                <IngredientCard
                  backgroundColor="bg-background-bright"
                  headerTextColor="text-background"
                  bodyTextColor="text-body-bold"
                  name={item.name}
                  image={item.image}
                  onClick={() => handleSelect(item)}
                />
              ))
            )}
          </>
        )}
      </div>
      {isOverflow && (
        <div className="absolute -bottom-8 left-0 right-0 text-sm text-body-bold text-center">
          Scroll to see more
        </div>
      )}
    </div>
  )
}
