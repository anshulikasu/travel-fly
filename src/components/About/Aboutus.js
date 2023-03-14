import React from "react";
import "./Aboutus.css";
import { RiFlightTakeoffFill } from "react-icons/ri";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Aboutus() {
  const abouts = [
    {
      title: "Promising Deals",
      para: "We strive to make online booking hassle-free for our customers across USA, UK, and Canada.",
    },
    {
      title: "Redefined Experience",
      para: "Our team at Flight hub deal focuses on improving the travel experience with impeccable flight deals.",
    },
    {
      title: "All-Embracing Offerings",
      para: "Our team at Flight hub deal focuses on improving the travel experience with impeccable flight deals.",
    },
    {
      title: "Ceaseless Support",
      para: "Need assistance while booking budget-friendly flights online? Our support team is here to help!",
    },
  ];
  return (
    <div className="aboutus">
      {/* <div className="banner_ph">
        <div src={plane}></div>
      </div> */}
      <Navbar />
      <div
        className="banner_section"
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
        <h2> About Us</h2>
      </div>
      <div className="aboutus_h">
        <div>
          <h2>
            Grab On the Best Flight Deals and Embark On Your Journey with Flight
            hub deal
          </h2>
          <p>
            Flight hub deal is your one-stop platform to explore competitive
            airfares and great discount deals on online flight booking across
            all major destinations in the USA, UK, and Canada. As a thriving
            booking platform, we endeavor to eliminate every challenge that
            comes your way while browsing flight schedules online.
          </p>
        </div>
        <div className="aboutus_bgicon">
          <RiFlightTakeoffFill />
        </div>
      </div>
      <div className="aboutus_section">
        <h2>Why Flight hub deal?</h2>
        {abouts.map((about, index) => (
          <Card
            key={index}
            title={about.title}
            icon={about.icon}
            para={about.para}
          />
        ))}
      </div>
      <div className="aboutus_lower">
        <div>
          <img
            className="lower_img"
            src="https://www.travelers.com/iw-images/resources/Individuals/Large/home/safety/6TipsForTravelingAlone_Large(0).jpg"
          />
        </div>
        <div className="lower_des">
          <h2>Fuss-Free Flight Booking to Have Something to Look Back On</h2>
          <p>
            Be it an important business meeting, a family occasion, or a
            much-needed break from work; travel is an immovable aspect of our
            lives. As a well-established travel service provider, we are
            familiar with the recurring challenges people face while planning
            their trips. Providing great deals and discounts on flight tickets
            is our way to alleviate your online flight booking experience. We
            believe that cost-efficient travel planning is the first step to a
            trip you would want to reminisce about later in your life. Therefore
            we make sure that you get to find the best flights in your budget
            and your preferred timeline.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
