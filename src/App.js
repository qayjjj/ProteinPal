import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Recipe from './pages/Recipe/Recipe'
import SignUp from './pages/SignUp/SignUp'
import LogIn from './pages/LogIn/LogIn'
import Recipes from './pages/Recipes/Recipes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
