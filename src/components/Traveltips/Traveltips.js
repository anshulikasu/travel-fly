import React from "react";
import "./Traveltips.css";

function Traveltips() {
  return (
    <div
      className="traveltips"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://transvelo.github.io/mytravel-html/assets/img/1920x500/img1.jpg"
          
      )`,
        backgroundPosition: "center center",
        height: "500px",
      }}
    >
      <div className="travel_ds">
        <h2 className="travel_des">Travel Tips</h2>
        <h3 className="travel_subdes">
          Northern Ireland’s is now contingent. Britain is getting a divorce
          Northern Ireland is being offered a trial separation for Britain there
          is a one
        </h3>
      </div>
    </div>
  );
}

export default Traveltips;
