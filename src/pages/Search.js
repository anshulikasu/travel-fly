import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Search() {
  return (
    <div
      className="search_pg"
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
      <h1> I am The Search pg</h1>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/002/147/279/original/young-man-and-woman-with-headphones-microphone-and-computer-customer-service-support-or-call-center-concept-free-vector.jpg" />
        <div>
          <h2>Call Now to Book: (781) 705-2718</h2>
          <h2>Hurry! Get the best deals starting at $988.00*</h2>
        </div>
      </div>
    </div>
  );
}

export default Search;
