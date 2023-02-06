import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { car_img, title, quantity, price } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);

  const removeItemHandler = () => removeItemToCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);

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
