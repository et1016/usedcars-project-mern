import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bmw3 from "../Assets/bmw3.png";
import bmwx6 from "../Assets/bmwx6.png";
import audia4 from "../Assets/audia4.png";
import audia7sportback from "../Assets/audia7sportback.png";
import asedan from "../Assets/asedan.png";
import esedanexclusive from "../Assets/esedanexclusive.png";
import glecoupe from "../Assets/glecoupe.png";
import vclass from "../Assets/vclass.png";

const VehicleInventory = () => {
  const [backgroundColour, setBackgroundColour] = useState(false);

  const navigate = useNavigate();

  const scrollHandler = () => {
    if (window.scrollY >= 400) {
      setBackgroundColour(true);
    } else {
      setBackgroundColour(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="inventory-background">
      <div className={backgroundColour ? "background-show" : "background-hide"}>
        <h1>車輛庫存</h1>

        <div className="cars-container">
          <div className="img-container">
            <img
              src={bmw3}
              alt="bmw3"
              onClick={() => navigate(`/search?query=bmw 3`)}
            />
            <p>BMW 3</p>
          </div>

          <div className="img-container">
            <img
              src={bmwx6}
              alt="bmwx6"
              onClick={() => navigate(`/search?query=bmw x6`)}
            />
            <p>BMW X6</p>
          </div>

          <div className="img-container">
            <img
              src={audia4}
              alt="audia4"
              onClick={() => navigate(`/search?query=audi a4`)}
            />
            <p>Audi A4</p>
          </div>

          <div className="img-container">
            <img
              src={audia7sportback}
              alt="audia7sportback"
              onClick={() => navigate(`/search?query=audi a7`)}
            />
            <p>Audi A7 Sportback</p>
          </div>

          <div className="img-container">
            <img
              src={asedan}
              alt="asedan"
              onClick={() => navigate(`/search?query=a-class`)}
            />
            <p>A - CLASS</p>
          </div>

          <div className="img-container">
            <img
              src={esedanexclusive}
              alt="esedanexclusive"
              onClick={() => navigate(`/search?query=e-class`)}
            />
            <p>E - CLASS</p>
          </div>

          <div className="img-container">
            <img
              src={glecoupe}
              alt="glecoupe"
              onClick={() => navigate(`/search?query=gle`)}
            />
            <p>GLE Coupé</p>
          </div>

          <div className="img-container">
            <img
              src={vclass}
              alt="vclass"
              onClick={() => navigate(`/search?query=v-class`)}
            />
            <p>V - CLASS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInventory;
