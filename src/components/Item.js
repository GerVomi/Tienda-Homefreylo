import React from 'react'
import ItemCount from './ItemCount'


function Item ({item}){

    function onAdd(itemChange){
        
        return alert('Gracias por su compra de '+itemChange+' producto(s)!')

}
    return<>
<>
        <div className="row vista-productos" style={{ textAlign: 'center', border:'2px solid black'}}>
        <figure class="figure">
  <img src="https://lh3.googleusercontent.com/proxy/S16EE2dnEokdYvZz4w5RfhY4Qqe_UEmY8Fog9IXPLm1bRZgH5iLCHu1u9yK9lboOmfkcAnya0mpgyAaiQm79xXHB3oAF5uYKbfLbqiErWOyBuzf3XL7TdlmvqQ" class="figure-img img-fluid rounded" alt={item.title}></img>
  <figcaption class="figure-caption">{item.title} Precio:${item.price}</figcaption>
</figure>
            <div className="col-md-2 align-self-center">
                <ItemCount stock={5} initial={2} onAdd={onAdd} />
            </div>
        </div>
        </>


    </>
}

export default Item