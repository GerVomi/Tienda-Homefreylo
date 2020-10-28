import React from 'react'
import ItemCount from './ItemCount'



function Home (){
    return <><div style={{ textAlign: 'center', border:'2px solid black'}}>
    <h3>BIENVENIDO A NUESTRA TIENDA!</h3>
    </div>
    <ItemListContainer></ItemListContainer>
    </>
}

function ItemListContainer (){
    
    function onAdd(item){
        
            return alert('Gracias por su compra de '+item+' producto(s)!')
        
        
    }
    return <div><ItemCount stock={10} initial={4} onAdd={onAdd} /></div>
    
    
}

export default Home