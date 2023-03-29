import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart.selector";
import { addItemToCart } from "../store/cart/cart.action";
import swipershoppingcart from "../Assets/swipershoppingcart.png";
import LocationShow from "./location-show";

const SearchCard = ({ carData }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addCarToCartHandler = () => dispatch(addItemToCart(cartItems, carData));
  return (
    <div className="search-card">
      <div className="p-container">
        <p>特價中 ! !</p>
      </div>

      <div
        className="img-container"
        style={{
          width: "100%",
          height: "40%",
          backgroundImage: `url(${carData.background_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>{carData.title}</p>

        <img src={carData.car_img} alt={carData.title} />
      </div>

      <p
        style={{
          fontSize: "1.265rem",
          marginTop: "2.5rem",
        }}
      >
        {carData.price}
      </p>

      <img
        style={{ marginTop: "0.5rem", cursor: "pointer" }}
        src={swipershoppingcart}
        alt="swipershoppingcart"
        onClick={addCarToCartHandler}
      />

      <div className="detail">
        <p>{carData.detail.month}</p>
        <p>{carData.detail.km}</p>
        <p>{carData.detail.cc}</p>
        <p>{carData.detail.hp}</p>
        <p>{carData.detail.door}</p>
        <p>{carData.detail.engine}</p>
        <p>{carData.detail.oil}</p>
        <p>{carData.detail.gear}</p>
      </div>

      <LocationShow />
    </div>
  );
};

export default SearchCard;
