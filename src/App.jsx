import React from 'react';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';
import  CartProvider  from './context/cartContext';
import Cart from './component/Cart';
import '@fontsource/roboto/300.css';
import Checkout from './component/Checkout';


  

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/cart" element={<Cart />}></Route>
      <Route exact path="/Checkout" element={<Checkout />}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;