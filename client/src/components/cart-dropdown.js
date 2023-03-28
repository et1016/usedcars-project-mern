import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

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
