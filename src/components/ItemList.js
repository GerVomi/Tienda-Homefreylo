import React from 'react'
import Item from './Item';

function ItemList ({item}){
    return <div>
    {item.map((it) => ( <Item key={item.id} item={it}> </Item>))}
        
   
    </div>
}

export default ItemList





