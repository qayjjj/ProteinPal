import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import veggies from '../../assets/images/veggies.png'

export default function About() {

  return (
  <div className="bg-background w-screen h-screen m-auto justify-center">
    <Navigation/>

    <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-header mt-10 lg:mt-16">
      About
    </h1>

    <section className="bg-background-alt text-header rounded-lg px-8 py-8 m-auto
      lg:w-3/5 m:w-3/4 sm:w-11/12 w-11/12 min-h-[12rem] lg:my-10 md:my-8 sm:my-4 my-4">

        <img src={veggies} alt="vegetables in a basket" 
        className="lg:w-1/2 md:w-3/4 sm:w-full w-full m-auto"/>

        <div className="w-full text-header lg:text-base md:text-base sm:text-sm text-sm">
         <p>
          <span className="text-body-bold font-bold lg:text-lg md:text-lg sm:text-base text-base">Welcome to MacroMunch 🌱</span>, a culinary haven where vegetables take center stage. 
          Our vegetarian-focused recipe website is not just a treasure trove of delicious dishes; 
          it's a platform that empowers users to become culinary maestros in their own kitchens. 
          At the heart of our concept is the freedom to create personalized recipes, putting you in 
          control of both flavor and nutrition.
         </p>
        
         <p className="mt-3">
          With MacroMunch’s user-friendly interface, you can craft your culinary masterpieces, selecting 
          from a diverse array of healthy, plant-based ingredients in our comprehensive food database. 
          What sets us apart is our commitment to providing not only delightful taste experiences but 
          also a deep understanding of the nutrients you're consuming. Each recipe comes equipped 
          with a detailed breakdown of essential vitamins, minerals, and macronutrients, empowering 
          you to make informed choices about your diet.
         </p>

         <p className="mt-3">
          Whether you're a seasoned vegetarian or just embarking on a plant-based journey, our website 
          caters to all skill levels. From vibrant salads to hearty main courses, let our virtual 
          cookbook be your inspiration. Join our community of passionate veggie enthusiasts, and 
          embark on your own culinary adventure. Embrace a new era of tasty vegetarian cooking and 
          well-informed dietary choices with MacroMunch.
         </p>
        </div>
    </section>


  </div>

)}
