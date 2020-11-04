import React, { useState, useEffect } from 'react'
import ItemListDetail from './ItemListDetail'

const itemTaskDetail = new Promise 
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

function ItemDetailContainer (){
    const [it, setItems] = useState([]);

    useEffect( () => {
        console.log('Init-Home');
        itemTaskDetail.then(res => {
            setItems(res);
        });
    }, []);    

return <>
        <div>
            <ItemListDetail item={it} />    
        </div>
    </>
}

export default ItemDetailContainer
