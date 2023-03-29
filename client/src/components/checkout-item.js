import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { car_img, title, quantity, price } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={car_img} alt={title} />
      </div>

      <span className="title">{title}</span>

      <span className="quantity">
        <div className="increase" onClick={addItemHandler}>
          ＋
        </div>

        <span className="value">{quantity}</span>

        <div className="reduce" onClick={removeItemHandler}>
          －
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
