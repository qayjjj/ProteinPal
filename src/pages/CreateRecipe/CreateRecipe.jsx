import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Content from './Content/Content';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="bg-background">
      <Navigation />
      <Content />
    </div>
  );
}

export default CreateRecipe;
