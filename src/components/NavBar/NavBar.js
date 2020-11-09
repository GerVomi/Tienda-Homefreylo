import React from 'react';
import CartWidget from '../CartWidget'
import { NavLink} from 'react-router-dom'

const categorias = [{id:'1', name:'Categoria 01'},{id:'2', name:'Categoria 02'},{id:'3', name:'Categoria 3'}]

function NavBar (){
return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  className="navbar-brand" to="/">Tienda HomeFreylo</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      {categorias.map(cat=><li key={cat.id}>
        <div style={{ textAlign: 'center', paddingLeft: 20, paddingTop:8}}>
        <NavLink to={`/category/${cat.id}`}  activeClasssName="currentCategory" >{cat.name}</NavLink>
        </div>
      </li>)}
      
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
   </div>
   <CartWidget />
</nav>

)


}

export default NavBar;