import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <div id="cart-container-product">
      <h1>Carrito de Compras</h1>
    </div>
  );
};

export default Cart;




