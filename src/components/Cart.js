import React from 'react'
import { useCartContext } from '../context/cartContext';

function Cart () {
    
    const {cart} = useCartContext()
    
return <>
<h4>ESTE ES EL CARRITO {cart.lenght}</h4>
</>
}

export default Cart