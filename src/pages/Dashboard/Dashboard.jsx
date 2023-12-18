import React, { useState, useEffect } from 'react'
import MyRecipes from './MyRecipes/MyRecipes'
import SavedRecipes from './SavedRecipes/SavedRecipes'
import Navigation from '../../components/Navigation/Navigation'
import SignOut from '../../components/SignOut/SignOut'
import { auth } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email)
        setIsLoggedIn(true)
      } else {
        setUserEmail('')
        setIsLoggedIn(false)
        navigate('/login')
      }
    })

    return () => unsubscribe()
  }, [navigate])

  return (
    <div className="bg-background">
      <Navigation />
      <div className="p-8 sm:py-10 sm:px-16 md:py-12 md:px-20 lg:py-28 lg:px-40 2xl:py-32 2xl:px-52">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-header">
          Dashboard
        </h1>
        <MyRecipes />
        <SavedRecipes />
      </div>
      <Footer />
    </div>
  )
}
