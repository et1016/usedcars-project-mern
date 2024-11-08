import axios from "axios";

const API_URL = "https://host-usedcars-project-mern.onrender.com/api/car";

class CarsService {
  carsMaterial(
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
  ) {
    return axios.post(API_URL + "/carregister", {
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
      carGear,
    });
  }

  carsFind() {
    return axios.get(API_URL + "/carfind");
  }

  carsSearch(query) {
    return axios.post(API_URL + "/carsearch", { query });
  }
}

export default new CarsService();
