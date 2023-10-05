import React from 'react';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';
import { CartContext } from './context/cartContext';
import { dividerClasses } from '@mui/material';
import Cart from './component/Cart';



function App() {
  return (
    <div>
      <CartContext.Provider value={[]}>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/cart/" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;