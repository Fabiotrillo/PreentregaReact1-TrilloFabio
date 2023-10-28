import React from 'react';
import { useCartContext } from '../context/cartContext';
import CartWidget from './WidgetCart';
import { sendOrderToFirestore } from '../firebase'; 

const Cart = () => {
  const { cart, calculateTotal, clearCart } = useCartContext();

  const handleFinishOrder = async () => {
    try {
      
      const orderData = {
        buyer: {
          name: "Juan Hansen",
          email: "juanhansen@gmail.com",
          phone:  "20304050"
          
        },
        products: cart, 
        total: calculateTotal(cart), 
      };

      // Envía la orden de compra a Firestore
      const orderId = await sendOrderToFirestore(orderData);

      console.log("Orden simulada creada con ID:", orderId);

      
      clearCart();

      
    } catch (error) {
      console.error("Error al simular la orden de compra:", error);
      
    }
  };

  return (
    <div id="cart-container-product">
      <h1 className='title-cart'>Carrito de Compras</h1>
      
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <CartWidget key={product.id} product={product} />
          ))}
        </ul>
        
      ) : (
        <p className='carrito-info'>El carrito está vacío.</p>
      )}
      <p className='price-total'>Total a pagar: ${calculateTotal(cart)}</p>
      <div className='conteiner-order'>
      <button className='finally-order' onClick={handleFinishOrder}>Finalizar Compra</button></div>
    </div>
  );
};

export default Cart;






