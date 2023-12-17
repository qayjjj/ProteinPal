import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase'
import searchIcon from '../../assets/icons/search.svg'
import profileIcon from '../../assets/icons/profile.svg'
import macroMunch from '../../assets/icons/macroMunch.svg'
import menuIcon from '../../assets/icons/menu.svg'
import AnimatedInput from '../Input/AnimatedInput'
import '../Input/index.css'

function Navigation() {
  const [searching, setSearching] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const [showCollapsibleNav, setShowCollapsibleNav] = useState(false)
  const [showDesktopMenu, setShowDesktopMenu] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    navigate(`/recipes?q=${searchValue}`)
    setSearchValue('')
  }

  const handleDisplayCollapsibleNav = () => {
    setShowCollapsibleNav((prev) => !prev)
  }

  const handleLogOut = async () => {
    try {
      await auth.signOut()
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div
      className={`sticky z-[100] top-0 flex items-center lg:justify-between bg-highlight px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 ${
        showCollapsibleNav && ''
      }`}
    >
      <div
        className="block lg:hidden mr-4"
        onClick={handleDisplayCollapsibleNav}
      >
        <img src={menuIcon} className="w-7 md:w-8" />
      </div>

      {/* App name */}
      <h1 className="text-header text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold drop-shadow-[-1px_0px_0px_#E0EEC6]">
        <Link to="/">
          MacroMunch
          <span className="leading-10 whitespace-nowrap">
            <img
              src={macroMunch}
              className="px-0 w-6 h-6 md:w-8 md:h-8 inline ml-2 -mt-2 md:-mt-3"
            />
          </span>
        </Link>
      </h1>

      {/* Collapsible nav */}
      <div
        className={`flex flex-col absolute top-16 md:top-[4.5rem] w-full -ml-6 md:-ml-8 bg-highlight text-header ${
          !showCollapsibleNav ? 'hidden' : 'border-t-[1px] border-body-bold'
        }`}
      >
        <h2 className="border-b-[1px] border-body-bold py-2 px-6 md:px-9 ">
          <Link to="/recipes">Recipes</Link>
        </h2>
        <h2 className="border-b-[1px] border-body-bold py-2 px-6 md:px-9">
          <Link to="/ingredients">Ingredients</Link>
        </h2>
        <h2 className="border-b-[1px] border-body-bold py-2 px-6 md:px-9">
          <Link to="/about">About</Link>
        </h2>

        {loggedIn ? (
          <>
            <h2 className="border-b-[1px] border-body-bold py-2 px-6 md:px-9">
              <Link to="/dashboard">Dashboard</Link>
            </h2>
            <h2
              className="border-b-[1px] border-body-bold py-2 px-6 md:px-9"
              onClick={handleLogOut}
            >
              Log Out
            </h2>
          </>
        ) : (
          <h2 className="border-b-[1px] border-body-bold bg-highlight-bright py-2 px-6 md:px-9">
            <Link to="/login">Log In</Link>
          </h2>
        )}
        <form
          id="nav-search"
          onSubmit={handleSearch}
          className="border-b-[1px] border-body-bold py-2 px-6"
        >
          <AnimatedInput
            classNames="w-full bg-background-alt "
            labelStyle="right-0"
            focusStyle="bg-background-alt"
            inputStyle="bg-background-alt text-sm text-body-bold p-2 nav-search"
            label={
              <img
                src={searchIcon}
                alt="Search Icon"
                className="w-6 h-6 mt-[0.15rem] lg:mt-0 lg:w-5 lg:h-5"
              />
            }
            inputType="text"
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
          />
        </form>
      </div>

      {/* Pages */}
      <div className="hidden lg:flex justify-between text-background w-1/3 font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
        <h2>
          <Link to="/recipes">Recipes</Link>
        </h2>
        <h2>
          <Link to="/ingredients">Ingredients</Link>
        </h2>
        <h2>About</h2>
      </div>

      {/* Search & Login */}
      <div className="hidden lg:flex relative">
        <form onSubmit={handleSearch}>
          <AnimatedInput
            classNames="w-36 xl:w-56 bg-highlight mr-4"
            labelStyle="-right-6"
            focusStyle="translate-x-2 text-highlight text-lg"
            blurStyle="-translate-x-1 text-xl"
            inputStyle="-mt-2 text-sm text-background-alt"
            label={
              <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
            }
            inputType="text"
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
          />
        </form>
        {loggedIn ? (
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="z-[150] hover:cursor-pointer w-6 h-6 ml-8"
            onMouseEnter={() => setShowDesktopMenu(true)}
            onMouseLeave={() => setShowDesktopMenu(false)}
          />
        ) : (
          <Link to="/login" className="ml-6 text-sm lg:text-base xl:text-2xl">
            Log In
          </Link>
        )}
      </div>

      {/* Collapsible menu for dashboard and log out on larger screens */}
      <div
        className={`flex flex-col absolute text-right top-14 right-8 w-36  text-header shadow-lg ${
          !showDesktopMenu && 'hidden'
        }`}
        onMouseEnter={() => setShowDesktopMenu(true)}
        onMouseLeave={() => setShowDesktopMenu(false)}
      >
        <div className="bg-transparent h-6"></div>
        <h2 className="py-3 pr-6 bg-highlight ">
          <Link to="/dashboard">Dashboard</Link>
        </h2>
        <h2
          className="pt-1 pb-3 pr-6 bg-highlight rounded-e"
          onClick={handleLogOut}
        >
          Log Out
        </h2>
      </div>
    </div>
  )
}

export default Navigation
