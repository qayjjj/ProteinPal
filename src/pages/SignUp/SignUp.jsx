import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'
// import Footer from '../../components/Footer/Footer'
import AnimatedInput from '../../components/Input/AnimatedInput'
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // create user from email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // const user = userCredential.user;
      // await firestore.collection('users').doc(user.uid).set({
      //   email: user.email,
      // });

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="py-16 px-40">
        <h1 className="ml-8 text-4xl font-bold text-body-bold">Create Account</h1>
      </div>

      <div className="py-10 px-40 bg-background-alt">
        <AnimatedInput inputText="Email" inputType="text" value={email} onChange={(value) => setEmail(value)}></AnimatedInput>
        <AnimatedInput inputText="Password" inputType="password" value={password} onChange={(value) => setPassword(value)}></AnimatedInput>

        <button
          class="bg-highlight-alt text-header font-bold px-20 py-2 my-2 ml-4 rounded"
          onClick={handleSignUp}>
          Create Account
        </button>

        {/* TODO: LOGIN NAV */}
        <p className="text-highlight ml-4">Already a member? Log in</p>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default SignUp;