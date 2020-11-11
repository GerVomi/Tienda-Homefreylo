import React, { useState, useEffect } from 'react'
import ItemListDetail from './ItemListDetail'
import { useParams } from 'react-router-dom'

const getItem = (id) =>{return new Promise
    ((res,rej)=>
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
          if(productos){
            res(productos.filter(producto => producto.id === id ));
            
        } else {
            rej('Tarea Error');
        }
    }, 2000)
    }
)
}



function ItemDetailContainer (){
    const [it, setItems] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        
        getItem(id).then(res => {
            setItems(res);
        });
    }, [id]);    

return <>
        <div>
            <h1>ID: {id}</h1>
            <ItemListDetail item={it} />    
        </div>
    </>
}

export default ItemDetailContainer
