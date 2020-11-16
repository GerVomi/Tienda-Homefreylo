 import React, { useContext,  useState } from 'react'



export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext)



export default function CartProvider ({children, defaultCart }) {

    

    const [cart, setCart ] = useState(defaultCart = [] ) // array de items

    
    
    function add(item){
        console.log('agregar item')
    }
    function remove(itemId){
        console.log('remover item')
    }
    

    return <CartContext.Provider value = {{cart , add, remove}}>
              {children}
    </CartContext.Provider>
}



