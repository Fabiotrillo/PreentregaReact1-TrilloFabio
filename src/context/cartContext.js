import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0); // Nuevo estado para la cantidad de items en el carrito

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartItemCount(cartItemCount + 1); // Incrementa la cantidad de items al agregar uno
  };

  // Resto de tu lógica para el carrito

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;