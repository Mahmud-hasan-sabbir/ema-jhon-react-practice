import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Reveiw from './components/Reveiw/Reveiw';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Bootstrap from './components/Bootstrap/Header/Bootstrap';


function App() {
  

  return (
    <>
      <div>
      <Header /> 
      <BrowserRouter>
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Shop />} />
      <Route path="/order" element={<Reveiw />} />
      <Route path="/manage" element={<Inventory />} />
      <Route path="/product/:productkey" element={<ProductDetail />} />
      <Route path="/bootstrap" element={<Bootstrap />} />
      <Route path="*" element={<Notfound />} />
      
    </Routes>
  </BrowserRouter>
 

        
      </div>
     
    </>
  )
}

export default App
