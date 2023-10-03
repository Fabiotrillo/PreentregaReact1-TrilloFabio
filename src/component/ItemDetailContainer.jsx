import React, { useEffect, useState } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail'; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(parseInt(id))
      .then((product) => setProduct(product))
      .catch((error) => console.error('Error obteniendo detalles del producto:', error));
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <div className="loading">Cargando...</div>}
    </div>
  );
};

export default ItemDetailContainer;