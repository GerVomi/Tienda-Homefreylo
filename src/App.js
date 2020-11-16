import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/cartContext'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <CartProvider defaultCart={[2]}>
      <BrowserRouter>
                      <NavBar />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/item/:id'>
              <ItemDetailContainer />
            </Route>
          <Route exact path='/carrito'>
            <Cart />
          </Route>
        </Switch>        
      </BrowserRouter>
  </CartProvider>
  );
}

export default App;
