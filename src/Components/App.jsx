import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Header from "./HeaderContainer/HeaderContainer";
import ProductCategories from "../Screens/ProductCategories";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AmazonFashion" element={<ProductCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
