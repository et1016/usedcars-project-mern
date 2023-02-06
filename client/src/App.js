import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "./components/CartContext";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./routes/Homepage";
import Search from "./routes/Search";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Checkout from "./routes/Checkout";
import Footer from "./components/Footer";
import AuthService from "./services/auth.service";
import CartService from "./services/cart.service";
import "./styles/style.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [cart, setCart] = useState(CartService.getCartLocalStorage());

  const { setCartItems } = useContext(CartContext);

  useEffect(() => setCartItems(cart), [cart]);

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Homepage currentUser={currentUser} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/admin" element={<Admin currentUser={currentUser} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
