import React from "react";
import video from "../../assets/flight-vd/video.mp4";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_ph">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="banner_section">
        <h2> search for holidays</h2>
        <p>Find awesome hotel, tour, car and activities in London</p>
      </div>
    </div>
  );
}

export default Banner;
