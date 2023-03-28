const router = require("express").Router();
const Car = require("../models/car-model");

router.use((req, res, next) => {
  console.log("一個請求正在進入 car.js");
  next();
});

router.post("/carregister", async (req, res) => {
  const newCar = new Car({
    title: req.body.carTitle,
    price: req.body.carPrice,
    background_img: req.body.carBackground,
    car_img: req.body.carImg,
    detail: {
      month: req.body.carMonth,
      km: req.body.carKm,
      cc: req.body.carCc,
      hp: req.body.carHp,
      door: req.body.carDoor,
      engine: req.body.carEngine,
      oil: req.body.carOil,
      gear: req.body.carGear,
    },
  });
  try {
    res.status(200).send({ msg: "車輛資料保存成功 ..." });
  } catch (err) {
    res.status(400).send("車輛資料未保存 ...");
  }
});

router.get("/carfind", async (req, res) => {
  await Car.find({})
    .then((cars) => {
      res.send(cars);
    })
    .catch((e) => {
      res.send(e);
    });
});

router.post("/carsearch", async (req, res) => {
  const { query } = req.body;
  await Car.find({ title: { $regex: query, $options: "i" } })
    .then((car) => {
      res.send(car);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
