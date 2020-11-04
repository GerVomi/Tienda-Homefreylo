import React from 'react'
import ItemCount from './ItemCount'


function Item ({item}){

    
    return<>
<>
        <div className="row vista-productos" style={{ width:'400px', textAlign: 'center', border:'2px solid black'}}>
        <figure class="figure">
  <img src={item.pictureUrl} className="img-fluid img-thumbnail" alt={item.title}></img>
  <figcaption class="figure-caption">{item.title} Precio:${item.price}</figcaption>
</figure>
            
        </div>
        </>


    </>
}

export default Item