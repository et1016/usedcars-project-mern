import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "./store/cart/cart.selector";
import { addLocalCartItem } from "./store/cart/cart.action";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/navigation";
import Homepage from "./routes/homepage";
import Search from "./routes/search";
import Register from "./routes/register";
import Login from "./routes/login";
import Admin from "./routes/admin";
import Checkout from "./routes/checkout";
import Footer from "./components/footer";
import AuthService from "./services/auth.service";
import CartService from "./services/cart.service";
import "./styles/style.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [cart, setCart] = useState(CartService.getCartLocalStorage());

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    dispatch(addLocalCartItem(cart));
  }, [cart]);

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
