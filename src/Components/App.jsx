import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Home from "../Screens/Home";
import Header from "./HeaderContainer/HeaderContainer";
import ProductCategories from "../Screens/ProductCategories";
import ShoppingCart from "../Screens/CartPage";
import LanguageSettings from "../Screens/LanguageSettings";
import LoginPage from "../Screens/LoginPage";
import SignUp from "../Screens/SignUpPage";

function AnimatedRoutes() {
  const location = useLocation();
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [location, controls]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, z: 50 }}
      animate={controls}
      exit={{ opacity: 0, z: -50 }}
      transition={{ duration: 1.5 }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/Home&Kitchen" element={<ProductCategories />} />
        <Route path="/AddToCart" element={<ShoppingCart />} />
        <Route path="/LanguageSettings" element={<LanguageSettings />} />
        <Route path="/SignIn" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp/>} /> 
      </Routes>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
