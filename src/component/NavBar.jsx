import React from 'react';
import Cart from './Cart';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className=" container d-flex">
      <Link className="navbar-brand text-warning " to="/">ELEXHIBIDOR</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item ">
            <Link className="nav-link text-white" to="/category/maniquies">Maniquies</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/category/perchas">Perchas</Link>
            </li>
          </ul>
          <Link to="/cart/"><button className="btn btn-dark"><i id="carrito-item" className="fa-solid fa-cart-shopping"></i></button></Link>
          <Cart/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;