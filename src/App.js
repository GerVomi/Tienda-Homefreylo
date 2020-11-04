import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'



import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
        <div>
        <NavBar></NavBar>
        <Home></Home>
        <h2>ItemDetailContainer</h2>
        <ItemDetailContainer></ItemDetailContainer>
        
        </div>
  );
}

export default App;
