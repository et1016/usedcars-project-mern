import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Typewriter from "typewriter-effect";
import benz from "../Assets/benz.jpg";
import cars from "../Assets/cars.jpg";
import audi from "../Assets/audi.jpg";
import VehicleInventory from "../components/vehicle-inventory";
import VehicleCarousel from "../components/vehicle-carousel";
import GoogleMap from "../components/google-map";

const Homepage = (props) => {
  const { currentUser } = props;

  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <section>
      <main>
        <div className="homepage-background">
          <div className="typewriterContainer">
            <Typewriter
              options={{
                strings: ["宥仁中古車拯救了 23,000 戶的家庭幸福。"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />

            <p>準備迎接幸福了嗎？</p>

            {!currentUser && (
              <button onClick={registerHandler}>開始使用</button>
            )}
          </div>

          <Swiper
            allowTouchMove={false}
            modules={[Pagination, EffectFade, Autoplay]}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div
                className="swiper-slide-cover"
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url(${benz})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="swiper-slide-cover"
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url(${cars})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="swiper-slide-cover"
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url(${audi})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <VehicleInventory />

        <VehicleCarousel />

        <GoogleMap />
      </main>
    </section>
  );
};

export default Homepage;
