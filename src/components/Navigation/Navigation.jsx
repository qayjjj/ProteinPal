import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../../assets/icons/search.svg'
import profileIcon from '../../assets/icons/profile.svg'
import { getRecipes } from '../../callApi'

function Navigation() {

  let search = () => {
    getRecipes({
      query: 'pasta',
      cuisine: 'italian',
    })
  }

  return (
    <div className="flex items-center justify-between bg-highlight px-12 py-6">
      {/* App name */}
      <h1 className="text-header text-4xl font-semibold drop-shadow-[-1px_0px_0px_#E0EEC6]">
        <Link to="/">proteinpal</Link>
      </h1>

      {/* Pages */}
      <div className="flex justify-between text-background w-1/3">
        <h2>Recipes</h2>
        <h2>Ingredients</h2>
        <h2>About</h2>
      </div>

      {/* Search & Login */}
      <div className="flex">
        <img src={searchIcon} alt="Search Icon" className="w-6 h-6" onClick={search}/>
        <img src={profileIcon} alt="Profile Icon" className="w-6 h-6 ml-6" />
      </div>
    </div>
  )
}

export default Navigation
