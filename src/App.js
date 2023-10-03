import React from 'react';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';




function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;