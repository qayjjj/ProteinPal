import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
// import Footer from '../../components/Footer/Footer'
import AnimatedInput from '../../components/Input/AnimatedInput'
import { auth } from '../../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    auth.signOut()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = userCredential.user
      console.log('Logged in user:', user)
      navigate('/dashboard')
    } catch (error) {
      alert('Login error:', error.message)
    }
  }

  return (
    <div className="bg-background">
      <Navigation />
      <div className="w-2/3 py-10 md:w-1/3 mx-auto md:h-44 md:pt-20">
        <h1 className="text-xl md:text-4xl font-bold text-body-bold">
          Welcome Back
        </h1>
      </div>

      <div className="bg-background-alt py-20 md:py-16 h-full">
        <AnimatedInput
          classNames="w-2/3 md:w-1/3 mx-auto bg-background-alt"
          focusStyle="-translate-y-3 text-highlight text-sm md:text-lg"
          blurStyle="translate-y-2 text-lg md:text-xl"
          inputStyle="mt-4 text-header"
          label="Email"
          inputType="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <AnimatedInput
          classNames="w-2/3 md:w-1/3 mt-8 md:mt-12 mx-auto bg-background-alt"
          focusStyle="-translate-y-3 text-highlight  text-sm md:text-lg"
          blurStyle="translate-y-2 text-lg md:text-xl"
          inputStyle="mt-4 text-header"
          label="Password"
          inputType="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />

        <div className="w-2/3 md:w-1/3 mx-auto mt-12 text-center">
          <button
            class="w-full bg-highlight-alt text-header font-bold py-2 md:py-3 rounded hover:shadow-md"
            onClick={handleLogin}
          >
            Sign In
          </button>

          <p className="text-highlight mt-6 text-sm md:text-base">
            New here?{' '}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LogIn
