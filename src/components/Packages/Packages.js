import React from "react";
import CardList from "../Cardlist/Cardlist";
import Navbar from "../Navbar/Navbar";
import Tcardlist from "../Tcardlist/Tcardlist";
import Footer from "../Footer/Footer";
import "./Packages.css";

function Packages() {
  return (
    <div className="packages">
      <div
        className="packages_banner"
        className="packages_banner"
        style={{
          backgroundSize: "cover",
          height: "400px",
          textAlign: "center",
          alignItems: "center",
          backgroundImage: `url(
        "https://www.travelandleisure.com/thmb/iSGDtdvKHv2zyJ3UBZ1mp7KV66E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flight-landing-INBNDCHECK1117-bbcbdbdd91f7480693283cd88393b3ff.jpg"
  
       )`,
          backgroundPosition: "center center",
        }}
      >
        Packages
      </div>
      <div className="pkg_tlist">
        <Tcardlist />
      </div>
    </div>
  );
}

export default Packages;
