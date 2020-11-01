import React, {useState} from 'react'



function ItemCount ({stock, initial, onAdd}) {
const [itemChange, setItem] = useState (initial)




function handleAdd(){
    if(itemChange < stock){
    setItem(itemChange + 1)
}
else {alert('Stock insuficiente')}
}

function handleRestar(){
    if(itemChange > 0){
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
    <button class="btn btn-primary" onClick={handleAdd} disabled={ stock <= 1 ? true : false }>+</button>
    <button class="btn btn-primary" onClick={handleRestar} disabled={ stock <= 1 ? true : false }> -</button>
    <p>Agregado = {itemChange}</p>
    <button onClick = { ( ) => onAdd(itemChange) } disabled={ stock <= 1 ? true : false }  className="btn btn-warning" type="button" >Agregar!  </button>     
</div>
          </>
}

export default ItemCount
