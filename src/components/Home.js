import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'


const itemTask = new Promise 
((res)=>
    { setTimeout(()=>
        { let productos = [{
           id: "1",
           title: "PRODUCTO 1",
           pictureUrl: "001.jpg",
           price: 5
         },
         {
           id: "2",
           title: "PRODUCTO 2",
           pictureUrl: "002.jpg",
           price: 10
         },
         {
           id: "3",
           title: "PRODUCTO 3",
           pictureUrl: "003.jpg",
           price: 15
         },
         {
            id: "4",
            title: "PRODUCTO 4",
            pictureUrl: "../images/004.jpg",
            price: 10
          }]
          console.log(productos[1].price)
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
        console.log('Init-Home');
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