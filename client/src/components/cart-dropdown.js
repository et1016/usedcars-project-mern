import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart.selector";
import CartItem from "./cart-item";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem._id} />
        ))}
      </div>

      <div className="cart-button-container">
        <button onClick={goToCheckoutHandler}>查看我的購物車</button>
      </div>
    </div>
  );
};

export default CartDropdown;
