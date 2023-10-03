import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className=" container d-flex justify-content-beetwen">
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
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;