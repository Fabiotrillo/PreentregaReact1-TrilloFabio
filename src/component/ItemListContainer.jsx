import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then(products => setProducts(products))
        .catch(error => console.error('Error fetching products:', error));
    } else {
      getProducts()
      .then(products => setProducts(products))
      .catch(error => console.error('Error fetching products:', error));
    }
  }, [categoryName]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;