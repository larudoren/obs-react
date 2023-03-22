import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home';
import './App.css';
import PrivateRoute from './PrivateRoute'
import Login from './Login';
import Layout from './components/Layout';



function App() {
  return (
    <div className="App">
      <Router>
          <Layout>
            <Routes>
              <Route path="/login" component= {Login} />
              <PrivateRoute path="/" component = { Home } />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
