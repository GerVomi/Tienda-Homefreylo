import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import BotonComprar from './BotonComprar'
import {Link} from 'react-router-dom'





function ItemDetail ({item}){
const [itemCant , setItemCant ] = useState (0)
const [killed, setKilled]  = useState(false)
   
useEffect (()=>{
    console.log('Item has changed')
},
[itemCant]
)



    function onAdd(itemChange){
        setKilled(true)
        setItemCant(itemChange)
        
 }
    return <>
    <div>
    <>
            <div className="row vista-productos p-2" style={{ textAlign: 'center', border:'2px solid black'}}>
                <div className="col-md-5 p-3 align-self-center">
                    <img style={{ width:'400px', textAlign: 'center'}} className="imagen-producto-detail" alt={item.pictureUrl} src={item.pictureUrl} />                 
                </div>
                <div className="col-md-7 p-2 align-self-center">
                <h2 className="titulo-producto">{item.title}</h2>
                    
                    <p className="description-producto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>               
                    <p><strong>Precio:</strong> ${item.price}</p>                    
                    {!killed && <ItemCount stock={5} initial={2} onAdd={onAdd} />}
                    <Link to='/carrito'><button type="button" class="btn btn-primary btn-lg btn-block" disabled={ itemCant < 1 ? true : false }>Terminar Compra</button></Link>
                </div>
            </div>       
        </>
    </div>

    </>
}

export default ItemDetail
