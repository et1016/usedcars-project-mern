import React from "react";
import logo from "../Assets/logo.png";

const GoogleMap = () => {
  return (
    <div className="location-background">
      <div className="location-left">
        <img src={logo} alt="logo" />

        <p>02 - 0000 - 0000</p>
        <p>不重要股份有限公司</p>
        <p>新北市板橋區信義路 279 巷</p>
        <p>週一至週五 10:00 - 19:00</p>
        <p>週六 / 週日 10:00 - 18:00 </p>
      </div>

      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57840.07730496881!2d121.4316216!3d25.0339101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802bc26ab658b%3A0x9fe68e1fa0bf0ef2!2z5ZCJ6aeV5YGc6LuK5aC0!5e0!3m2!1szh-TW!2stw!4v1670905024020!5m2!1szh-TW!2stw"
        width="60%"
        height="60%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
