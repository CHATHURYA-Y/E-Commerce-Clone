// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import { Cart } from "./pages/cart/cart";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Router>
      <div className="App">
        <ShopContextProvider>
          <Navbar scrollToContact={scrollToContact} />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </ShopContextProvider>
      </div>
    </Router>
  );
}

export default App;
