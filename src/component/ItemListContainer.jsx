import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    let q;
    if (categoryName) {
    
      q = query(itemsCollection, where('category', '==', categoryName));
    } else {

      q = query(itemsCollection);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const itemsData = [];
        querySnapshot.forEach((doc) => {
          itemsData.push(doc.data());
        });
        setItems(itemsData);
      })
      .catch((error) => {
        console.error('Error obteniendo items:', error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;