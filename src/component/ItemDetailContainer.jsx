import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'items', id); 

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);
        } else {
          console.error('El producto no existe');
        }
      })
      .catch((error) => {
        console.error('Error obteniendo detalles del producto:', error);
      });
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="loading">Cargando...</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;