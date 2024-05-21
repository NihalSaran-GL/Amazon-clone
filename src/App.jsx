import React from 'react';
import Home from './Components/HomePage/Home';
import Product from './Components/ProductDetails/Product'
import Navbottom from './Components/Navbar/navbottom/navbottom';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Navbottom />
      <Routes>
        <Route path="/" element={
            <Home />
        } />
        <Route path='/product' element={
            <Product />
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
