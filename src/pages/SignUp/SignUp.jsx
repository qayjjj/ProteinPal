import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
// import Footer from '../../components/Footer/Footer'
import AnimatedInput from '../../components/Input/AnimatedInput'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      // create user from email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      // const user = userCredential.user;
      // await firestore.collection('users').doc(user.uid).set({
      //   email: user.email,
      // });

      alert('User registered successfully!')
    } catch (error) {
      console.error('Error creating user:', error.message)
    }
  }

  return (
    <div className="bg-background">
      <Navigation />
      <div className="w-1/3 mx-auto h-44 pt-20">
        <h1 className="text-4xl font-bold text-body-bold">Create Account</h1>
      </div>

      <div className="bg-background-alt py-16">
        <AnimatedInput
          classNames="w-1/3 mx-auto bg-background-alt"
          focusStyle="-translate-y-3 text-highlight text-lg"
          blurStyle="translate-y-2 text-xl"
          inputStyle="mt-4 text-header"
          label="Email"
          inputType="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <AnimatedInput
          classNames="w-1/3 mt-12 mx-auto bg-background-alt"
          focusStyle="-translate-y-3 text-highlight text-lg"
          blurStyle="translate-y-2 text-xl"
          inputStyle="mt-4 text-header"
          label="Password"
          inputType="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <div className="w-1/3 mx-auto mt-16 text-center">
          <button
            class="w-full bg-highlight-alt text-header font-bold px-20 py-3 rounded hover:shadow-md"
            onClick={handleSignUp}
          >
            Create Account
          </button>

          <p className="text-highlight mt-6">
            Already a member?{' '}
            <Link to="/login" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default SignUp
