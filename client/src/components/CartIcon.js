import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import navshoppingcart from "../Assets/navshoppingcart.png";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const cartOpenHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={cartOpenHandler}>
      <img src={navshoppingcart} alt="navshoppingcart" />

      <div className="item-count-container">
        <span className="item-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default CartIcon;
