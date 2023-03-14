import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_pr">
        <div className="footer_cc">
          <h2>REACH US AT</h2>
          <div className="footer_sub">
            <BsFillTelephoneOutboundFill className="icons" />
            <h4>(781)705-2718 </h4>
          </div>
          <div className="footer_sub">
            <MdEmail className="icons" />
            <h4>info@flighthubdeal.com</h4>
          </div>
          <div className="footer_sub">
            <HiLocationMarker className="icons" />
            <h4>25 Willis St 14 Framingham, MA 01702, USA</h4>
          </div>
        </div>

        <div className="footer_sec">
          <h2>TOP DESTINATIONS</h2>
          <h3>Miami</h3>
          <h3>San Francisco</h3>
          <h3>London</h3>
          <h3>Tokyo</h3>
          <h3>California</h3>
          <h3>Las Vegas</h3>
        </div>
        <div className="footer_th">
          <h2>TERMS</h2>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <Link to="refundpolicy">
            {" "}
            <h3 className="h3_li">Privacy Policy</h3>
          </Link>
          <Link to="tandc">
            <h3>Terms & Condition</h3>
          </Link>
          <h3>Disclaimer</h3>
          <h3>Refund Policy</h3>
        </div>
      </div>
      <hr></hr>
      <div className="footer_bottom">
        <div className="bt_h">
          <h4>Save Instantly on Unpublished Deals - CALL NOW</h4>
        </div>
        <div className="bt_nu">
          <button>
            <h4>(781)705-2718 </h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
