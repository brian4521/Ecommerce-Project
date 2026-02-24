import React from "react";
import Navbar from "./components/Navbar";
import Productlist from "./pages/Productlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Productdetails from "./pages/Productdetails";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Productlist />} />
            <Route path="/product/:id" element={<Productdetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
};

export default App;
