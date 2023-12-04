import React, { useRef, useEffect, useState } from 'react'
import IngredientCard from '../../../../components/IngredientCard/IngredientCard'
import './index.css'

const list = [1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

export default function SearchResults() {
  const containerRef = useRef(null)
  const [showScrollText, setShowScrollText] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (container.scrollHeight > container.clientHeight) {
      // Content overflows
      setShowScrollText(true)
    } else {
      setShowScrollText(false)
    }
  }, [])

  return (
    <div className="relative mt-4">
      <div
        ref={containerRef}
        className="w-full max-h-[26.5rem] overflow-scroll grid grid-cols-4 gap-3 shadow-inner rounded-xl p-2"
      >
        {list.map(() => (
          <IngredientCard
            backgroundColor="bg-background-bright"
            headerTextColor="text-background"
            bodyTextColor="text-body-bold"
          />
        ))}
      </div>
      {showScrollText && (
        <div className="absolute -bottom-8 left-0 right-0 text-sm text-body-bold text-center">
          Scroll to see more
        </div>
      )}
    </div>
  )
}
