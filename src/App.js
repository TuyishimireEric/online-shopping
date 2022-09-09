import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Header';
import ProductList from './components/products/Products';
import Details from './components/products/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
