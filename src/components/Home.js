import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'




const itemTask = new Promise 
((res)=>
    { setTimeout(()=>
        { let productos = [{
           id: "1",
           title: "PRODUCTO 1",
           pictureUrl: "https://i.ibb.co/HpVhsQv/003.jpg",
           price: 5
         },
         {
           id: "2",
           title: "PRODUCTO 2",
           pictureUrl: "https://i.ibb.co/n8T2Hmw/004.jpg",
           price: 10
         },
         {
           id: "3",
           title: "PRODUCTO 3",
           pictureUrl: "https://i.ibb.co/qB6wYXT/005.jpg",
           price: 15
         },
         {
            id: "4",
            title: "PRODUCTO 4",
            pictureUrl: "https://i.ibb.co/cQ5LfYd/006.jpg",
            price: 10
          }]
         res(productos)
        }, 2000)
    }
)

function Home (){
    
    return <><div style={{ textAlign: 'center', border:'2px solid black'}}>
    <h3>BIENVENIDO A NUESTRA TIENDA!</h3>
    </div>
    
    <ItemListContainer></ItemListContainer>
    
    
    </>
}

function ItemListContainer (){

    const [items, setItems] = useState([]);
    

    useEffect( () => {
        
        itemTask.then(res => {
            setItems(res);
        });
    }, []);    

return <>
        <div>
            <ItemList item={items} />    
        </div>
    </>
}

export default Home