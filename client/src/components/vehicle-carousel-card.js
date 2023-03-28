import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import swipershoppingcart from "../Assets/swipershoppingcart.png";
import LocationShow from "./location-show";

const VehicleCarouselCard = ({ carData }) => {
  const navigate = useNavigate();

  const { addItemToCart } = useContext(CartContext);

  const addCarToCartHandler = () => addItemToCart(carData);

  return (
    <div className="carousel-card">
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

        <img
          src={carData.car_img}
          alt={carData.title}
          onClick={() => navigate(`/search?query=${carData.title}`)}
        />
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
        style={{ marginTop: "0.5rem" }}
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

export default VehicleCarouselCard;
