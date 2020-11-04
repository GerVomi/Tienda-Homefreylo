import React from 'react'
import ItemDetail from './ItemDetail';

function ItemList ({item}){
    return <div>
    {item.map((it) => ( <ItemDetail key={item.id} item={it}> </ItemDetail>))}
    
    </div>
}

export default ItemList
