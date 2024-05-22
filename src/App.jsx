import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import Product from './Components/ProductDetails/Product';
import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer';
import './App.css';
import Login from './Components/LoginPage/login';
import SignUp from './Components/SignUpPage/signup';



function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Amazon-clone" element={<Home />}/>
          <Route path="/product" element={<Product />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/product/:imageName' element={<Product />}></Route>
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
