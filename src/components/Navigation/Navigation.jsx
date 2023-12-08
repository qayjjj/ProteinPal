import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase';
import searchIcon from '../../assets/icons/search.svg'
import profileIcon from '../../assets/icons/profile.svg'
import AnimatedInput from '../Input/AnimatedInput'

function Navigation() {
  const [searching, setSearching] = useState('false')
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/recipes?q=${searchValue}`);
    setSearchValue('')
  }

  const handleDisplaySearchBar = () => {
    setSearching((prev) => !prev)
  }

  return (
    <div className="flex items-center justify-between bg-highlight px-12 py-6">
      {/* App name */}
      <h1 className="text-header text-4xl font-semibold drop-shadow-[-1px_0px_0px_#E0EEC6]">
        <Link to="/">proteinpal</Link>
      </h1>

      {/* Pages */}
      <div className="flex justify-between text-background w-1/3 font-semibold">
        <h2>
          <Link to="/recipes">Recipes</Link>
        </h2>
        <h2>Ingredients</h2>
        <h2>About</h2>
      </div>

      {/* Search & Login */}
      <div className="flex relative">
        <form onSubmit={handleSearch}>
          <AnimatedInput
            classNames="w-52 bg-highlight mr-5"
            labelStyle="-right-6"
            focusStyle="translate-x-2 text-highlight text-lg"
            blurStyle="-translate-x-1 text-xl"
            inputStyle="-mt-2 text-sm text-background-alt"
            label={<img src={searchIcon} alt="Search Icon" className="w-6 h-6" />}
            inputType="text"
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
          />
        </form>
        <Link to="/login"><img src={profileIcon} alt="Profile Icon" className="w-6 h-6 ml-8" /></Link>
      </div>
    </div>
  )
}
console.log(auth.currentUser);
export default Navigation
