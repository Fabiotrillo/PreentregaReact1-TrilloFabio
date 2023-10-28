import React, { useState, useContext, createContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addProduct = (item, newQuantity) => {
    
    const updatedCart = [...cart];

    
    const productIndex = updatedCart.findIndex(product => product.id === item.id);

    if (productIndex !== -1) {
      
      updatedCart[productIndex].quantity += newQuantity;
    } else {
      
      updatedCart.push({ ...item, quantity: newQuantity });
    }

    
    setCart(updatedCart);
  };

  //Para saber si el producto ya esta en carrito
  const isInCart = (id) => !!cart.find(product => product.id === id);
  //Elimino producto
  const removeProduct= (id) => setCart(cart.filter(product => product.id !== id))

  const clearCart = () => setCart([]);

  const calculateTotal = (cart) => {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
};


  return (
    <CartContext.Provider value={{ cart, setCart, addProduct, isInCart, removeProduct, calculateTotal, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;