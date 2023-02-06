import React from "react";

const CartItem = ({ cartItem }) => {
  const { car_img, title, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={car_img} alt={title} />

      <div className="item-details">
        <span className="title">{title}</span>

        <span className="price">
          {quantity} x {price.replace(/[\u4e00-\u9fa5]/g, "")}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
