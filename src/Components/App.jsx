import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Header from "./HeaderContainer/HeaderContainer";
import ProductCategories from "../Screens/ProductCategories";
import Footer from "./FooterContainer/footer";


  function App() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AmazonFashion" element={<ProductCategories />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;