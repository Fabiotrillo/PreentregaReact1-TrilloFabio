import React from 'react';
import { useCartContext } from '../context/cartContext';
import CartWidget from './WidgetCart';
import { sendOrderToFirestore } from '../firebase'; // Asegúrate de importar esta función

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
        products: cart, // Utiliza los productos del carrito
        total: calculateTotal(cart), // Calcula el total a partir del carrito
      };

      // Envía la orden de compra a Firestore
      const orderId = await sendOrderToFirestore(orderData);

      console.log("Orden simulada creada con ID:", orderId);

      // Limpia el carrito después de enviar la orden
      clearCart();

      // Puedes mostrar un mensaje de éxito o redirigir al usuario después de la simulación
    } catch (error) {
      console.error("Error al simular la orden de compra:", error);
      // Puedes mostrar un mensaje de error en caso de fallo
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






