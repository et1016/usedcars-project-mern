import React, { useState } from "react";
import CarsService from "../services/cars.service";

const Admin = (props) => {
  const { currentUser } = props;

  const [carTitle, setCarTitle] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carBackground, setCarBackground] = useState("");
  const [carImg, setCarImg] = useState("");
  const [carMonth, setCarMonth] = useState("");
  const [carKm, setCarKm] = useState("");
  const [carCc, setCarCc] = useState("");
  const [carHp, setCarHp] = useState("");
  const [carDoor, setCarDoor] = useState("");
  const [carEngine, setCarEngine] = useState("");
  const [carOil, setCarOil] = useState("");
  const [carGear, setCarGear] = useState("");

  const createDataHandler = () => {
    CarsService.carsMaterial(
      carTitle,
      carPrice,
      carBackground,
      carImg,
      carMonth,
      carKm,
      carCc,
      carHp,
      carDoor,
      carEngine,
      carOil,
      carGear
    )
      .then((response) => {
        console.log(response.data.saveObject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      {currentUser &&
        currentUser.user.email === process.env.REACT_APP_ADMIN && (
          <div className="form-group-container">
            <h1>車輛資料建立系統</h1>

            <div className="form-group">
              <label htmlFor="title">車輛名稱 : </label>
              <input
                type="text"
                onChange={(e) => setCarTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">車輛價格 : </label>
              <input
                type="text"
                onChange={(e) => setCarPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="background_img">背景圖片 : </label>
              <input
                type="text"
                onChange={(e) => setCarBackground(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="car_img">車輛圖片 : </label>
              <input type="text" onChange={(e) => setCarImg(e.target.value)} />
            </div>

            <div className="form-group-detail-container">
              <div className="form-group-detail-left">
                <div className="form-group-detail">
                  <label htmlFor="month">月份 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarMonth(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="km">公里數 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarKm(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="cc">排氣量 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarCc(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="hp">馬力 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarHp(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group-detail-right">
                <div className="form-group-detail">
                  <label htmlFor="door">幾門 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarDoor(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="engine">引擎 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarEngine(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="oil">油種 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarOil(e.target.value)}
                  />
                </div>

                <div className="form-group-detail">
                  <label htmlFor="gear">排檔 : </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setCarGear(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button onClick={createDataHandler}>建立</button>
          </div>
        )}

      {(!currentUser ||
        currentUser.user.email !== process.env.REACT_APP_ADMIN) && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "10rem",
              left: "10rem",
            }}
          >
            您非管理員，請重新操作。
          </p>
        </div>
      )}
    </div>
  );
};

export default Admin;
