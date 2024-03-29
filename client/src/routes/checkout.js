import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>商品</span>
        </div>

        <div className="header-block">
          <span>車型</span>
        </div>

        <div className="header-block">
          <span>數量</span>
        </div>

        <div className="header-block">
          <span>價格</span>
        </div>

        <div className="header-block">
          <span>移除</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem._id} />
      ))}

      <span className="total">
        總金額 ({cartItems.length} 個商品) : ${" "}
        {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </div>
  );
};

export default Checkout;
