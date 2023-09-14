import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className=" container d-flex justify-content-around">
        <a className="navbar-brand text-warning " href="#">ELEXHIBIDOR</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Nosotros</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;