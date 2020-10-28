import React, {useState} from 'react'



function ItemCount ({stock, initial, onAdd}) {
const [itemChange, setItem] = useState (initial )




function agregarItem(){
    if(itemChange < 10){
    setItem(itemChange + 1)
}
else {alert('Stock insuficiente')}
}

function restarItem(){
    if(itemChange > 1){
    setItem(itemChange - 1)
    }
    else {
        alert("valor no permitido")
    }
  }

    return <>
<div style={{ textAlign: 'center', border:'2px solid black'}} className="shop-item-count">
    <p>Stock:{stock}</p>
    <p>Item inicial:{initial}</p>
    <button class="btn btn-primary" onClick={agregarItem}>+</button>
    <button class="btn btn-primary" onClick={restarItem}> -</button>
    <p>Agregado = {itemChange}</p>
    <button onClick = { ( ) => onAdd(itemChange) } className="btn btn-warning" type="button" >Agregar!  </button>     
</div>
          </>
}

export default ItemCount
