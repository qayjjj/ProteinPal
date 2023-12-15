import React from 'react';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    );
};

export default SignOut;
