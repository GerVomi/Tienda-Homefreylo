import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
        <div>
        <NavBar></NavBar>
        <Home />
        </div>
  );
}

export default App;
