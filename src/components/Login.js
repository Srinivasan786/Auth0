import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from 'react-router-dom';

import './commonStyles.css';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, user, isAuthenticated  } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch({ type: 'LOGIN_REQUEST', payload: user, navigation: navigate });
    }
  }, [isAuthenticated, user, dispatch, navigate]);

  return (
    <div className='commonDiv'>
      <h2>Please click the login button to enjoy the "Login with Auth0" feature</h2>
      <button onClick={loginWithRedirect}>Login with Auth0</button>
    </div>
  );
};

export default Login;
