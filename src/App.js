import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Recipe from './pages/Recipe/Recipe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
