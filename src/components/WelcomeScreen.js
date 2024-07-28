import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

import './commonStyles.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated, isLoading  } = useAuth0();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate]);

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  if (isLoading) {
    return <div className='commonDiv'>Loading ...</div>;
  }

  return (
    <div className='commonDiv'>
      <h2>Welcome, {user ? user.name : 'Guest'}</h2>
      <h2>Email: {user ? user.email : 'test@gmail.com'}</h2>
      <button onClick={logoutWithRedirect}>Logout</button>
    </div>
  );
};

export default WelcomeScreen;
