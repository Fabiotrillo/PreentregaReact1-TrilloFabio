import React from 'react';


const ItemDetail = ({ product }) => {
    const { name, description, img, price } = product;
  return (
    <div className='detail-container'>
      <h2>{name}</h2>
      <img className="imagen-producto" src={img} alt={name} />
      <p>{description}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default ItemDetail;