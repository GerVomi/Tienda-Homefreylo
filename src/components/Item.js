import React from 'react'
import {Link} from 'react-router-dom'

function Item ({item}){

    
    return<>
<>
        <div className="row vista-productos" style={{ width:'400px', textAlign: 'center', border:'2px solid black'}}>
        <figure class="figure">
  <Link to={`/item/${item.id}`}><img src={item.pictureUrl} className="img-fluid img-thumbnail" alt={item.title}></img></Link>
  <figcaption class="figure-caption">{item.title} Precio:${item.price}</figcaption>
</figure>
            
        </div>
        </>


    </>
}

export default Item