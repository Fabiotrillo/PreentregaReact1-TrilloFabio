import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';



const ItemDetail = ({ product }) => {
  const { name, description, img, price } = product;
  console.log(product)
  const [quantity, setQuantity] = useState(1);
  const {addProduct} = useCartContext();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    addProduct(product, quantity);
  };
 

  return (
    <div className='detail-container'>
      <h2>{name}</h2>
      <img className="imagen-producto" src={img} alt={name} />
      <p>{description}</p>
      <p>Precio: ${price * quantity}</p>
      <p>
        Cantidad:
        <button id='btn-decrement' className='btn  btn-sm p-1' onClick={handleDecrement}>-</button>
        {quantity}
        <button id='btn-increment' className='btn  btn-sm p-1' onClick={handleIncrement}>+</button>
      </p>
      <button className='btn btn-dark mb-3' onClick={addToCart}>Añadir al Carrito</button>

    </div>
  );
};

export default ItemDetail;





