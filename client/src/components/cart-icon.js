import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, selectCartCount } from "../store/cart/cart.selector";
import { setIsCartOpen } from "../store/cart/cart.action";
import navshoppingcart from "../Assets/navshoppingcart.png";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);

  const count = useSelector(selectCartCount);

  const cartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={cartOpenHandler}>
      <img src={navshoppingcart} alt="navshoppingcart" />

      <div className="item-count-container">
        <span className="item-count">{count}</span>
      </div>
    </div>
  );
};

export default CartIcon;
