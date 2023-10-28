import React from 'react';
import { useCartContext } from '../context/cartContext';
import CartWidget from './WidgetCart';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, calculateTotal  } = useCartContext();

  return (
    <div id="cart-container-product">
      <h1 className='title-cart'>Carrito de Compras</h1>
      
      {cart.length > 0 ? (
        <div className='container-cart'>
          {cart.map((product) => (
            <CartWidget key={product.id} product={product} />
          ))}
        </div>
        
      ) : (
        <p className='carrito-info'>El carrito está vacío.</p>
      )}
      <p className='price-total'>Total a pagar: ${calculateTotal(cart)}</p>
      <Link className='finally-order'  to="/Checkout"><button>Detalle de compra</button></Link>
    </div>
  );
};

export default Cart;










