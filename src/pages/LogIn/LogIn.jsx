import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'
// import Footer from '../../components/Footer/Footer'
import AnimatedInput from '../../components/Input/AnimatedInput'
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Logged in user:', user);
        navigate('/');
    } catch (error) {
        console.error('Login error:', error.message);
    }
};
  
  return (
    <div>
      <Navigation />
      <div className="py-16 px-40">
        <h1 className="ml-8 text-4xl font-bold text-body-bold">Welcome Back</h1>
      </div>

      <div className="py-10 px-40 bg-background-alt">
        <AnimatedInput inputText="Email" inputType="text" value={email} onChange={(value) => setEmail(value)}></AnimatedInput>
        <AnimatedInput inputText="Password" inputType="password" value={password} onChange={(value) => setPassword(value)}></AnimatedInput>

        <button
          class="bg-highlight-alt text-header font-bold px-20 py-2 my-2 ml-4 rounded"
          onClick={handleLogin}>
          Sign In
        </button>

        <p className="text-highlight ml-4">
          New here?{' '}
          <Link to="/signup" className="underline">Sign up!</Link>
        </p>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default LogIn;