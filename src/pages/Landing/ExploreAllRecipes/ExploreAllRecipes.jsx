import React from 'react'
import arrow from '../../../assets/icons/arrow.svg'
import Carousel from '../../../components/Carousel/Carousel'
import { getVegRecipes } from '../../../callApi'
import { useState, useEffect } from 'react'

export default function ExploreAllRecipes() {
  const [carouselRecipes, setCarouselRecipes] = useState([]);

  useEffect(() => {
    const searchRecipes = async () => {
      const data = await getVegRecipes({}, 10);
      setCarouselRecipes(data.results)
    }
    searchRecipes();
  }, []);

  return (
    <div className="py-16 px-40 bg-background">
      <h1 className="ml-8 text-4xl font-bold text-body-bold ">
        Explore delicious, high-protein recipes
      </h1>

      {/* Recipes */}
      <div className="w-full grid justify-items-center relative mt-16">
        <Carousel
          backgroundColor="bg-background-alt"
          headerTextColor="text-highlight-bright"
          bodyTextColor="text-body-bold"
          recipes={carouselRecipes}
        />
      </div>

      <p className="mt-8 text-highlight-alt text-right">
        Find Recipes Now
        <img src={arrow} className="w-4 h-4 inline" />
      </p>
    </div>
  )
}
