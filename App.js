import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setName('Admin');
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
  }

  return (
    <div className="App">
      
        {isLoggedIn ? (
          <>
            <div className="content">
              <Home name={name} onLogout={handleLogout} />
            </div>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
        {isLoggedIn && <Navigate to="/home" />}
    </div>
  );
}

export default App;
