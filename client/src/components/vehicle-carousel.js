import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import VehicleCarouselCard from "./vehicle-carousel-card";
import CarsService from "../services/cars.service";

const VehicleCarousel = () => {
  const [carsData, setCarsData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CarsService.carsFind()
      .then((response) => {
        setIsLoading(false);
        setCarsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="carousel-background">
      {isLoading ? (
        <h1>讀取中，請稍後 ...</h1>
      ) : (
        <div>
          <h1>最新上架</h1>

          <div className="swiper-container">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <Swiper
              modules={[Navigation, A11y, FreeMode]}
              spaceBetween={35}
              slidesPerView={"auto"}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              freeMode={true}
            >
              {carsData &&
                carsData.map((carData) => {
                  return (
                    <SwiperSlide
                      style={{ width: "min-content" }}
                      key={carData._id}
                    >
                      <VehicleCarouselCard carData={carData} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleCarousel;
