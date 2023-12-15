import React, { useState, useEffect } from 'react';
import MyRecipes from './MyRecipes/MyRecipes';
import SavedRecipes from './SavedRecipes/SavedRecipes';
import Navigation from '../../components/Navigation/Navigation';
import SignOut from '../../components/SignOut/SignOut';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setIsLoggedIn(true);
      } else {
        setUserEmail('');
        setIsLoggedIn(false);
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="bg-background">
      <Navigation />
      <div className="py-28 px-56">
        <h1 className="text-4xl font-bold text-header">
          {isLoggedIn ? `Dashboard for ${userEmail}` : 'Log In To View Your Personalized Dashboard!'}
        </h1>
        <MyRecipes />
        <SavedRecipes />
        <SignOut />
      </div>
    </div>
  );
}
