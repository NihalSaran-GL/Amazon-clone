import React from 'react';
import Home from './Components/HomePage/Home';
import Product from './Components/ProductDetails/Product'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import './App.css'
import Login from './Components/LoginPage/login'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path='/product' element={
          <Product />
        }></Route>
        <Route path='/signin' element={
          <Login />
        }></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
