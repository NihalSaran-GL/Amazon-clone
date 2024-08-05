import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Header from "./HeaderContainer/HeaderContainer";
import ProductCategories from "../Screens/ProductCategories";
import ShoppingCart from "../Screens/CartPage";
import LanguageSettings from "../Screens/LanguageSettings";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home&Kitchen" element={<ProductCategories />} />
        <Route path="/AddToCart" element={<ShoppingCart />} />
        <Route path="/LanguageSettings" element={<LanguageSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
