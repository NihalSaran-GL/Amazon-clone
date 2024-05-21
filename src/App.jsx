import React from 'react';
import Home from './Components/HomePage/Home';
import Product from './Components/ProductDetails/Product'
import Navbottom from './Components/Navbar/navbottom/navbottom';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { FooterBottom } from './Components/Footer/FooterBottom/FooterBottom';
import { FooterSignIn } from './Components/Footer/FooterSignIn/FooterSignIn'
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
      <FooterSignIn />
      <Footer />
      <FooterBottom />
    </Router>
  );
}

export default App;
