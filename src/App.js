// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import WelcomeScreen from './components/WelcomeScreen';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
