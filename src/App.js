import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Recipe from './pages/Recipe/Recipe'
import SignUp from './pages/SignUp/SignUp'
import LogIn from './pages/LogIn/LogIn'
import Recipes from './pages/Recipes/Recipes'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateRecipe from './pages/CreateRecipe/CreateRecipe'
import Ingredients from './pages/Ingredients/Ingredients'
import CustomRecipe from './pages/CustomRecipe/CustomRecipe'
import About from './pages/About/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/ingredients" element={<Ingredients/>} />
        <Route path="/customrecipe" element={<CustomRecipe/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
