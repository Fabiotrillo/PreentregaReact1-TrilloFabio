import React from 'react';
import ProductCard from './ProductCard';

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Nuestros Productos!</h2>
      <div className='contenedor-productos'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
