import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_section">
        <div className="flight_logo">
          <h2>travel</h2>
        </div>

        <div className="nav">
          <div className="nav_links">
            <Link className="nav_sublinks" to="/">
              <div className="nav_icons">
                <span className="nav_text">Home</span>
                <IoMdArrowDropdown className="icons" />
              </div>
            </Link>
            <Link className="nav_sublinks" to="packages">
              <div className="nav_icons">
                <span className="nav_text">Package</span>
                <IoMdArrowDropdown className="icons" />
              </div>
            </Link>
            <Link className="nav_sublinks" to="aboutus">
              <div className="nav_icons">
                <span className="nav_text">About us</span>
                <IoMdArrowDropdown className="icons" />
              </div>
            </Link>
            <Link className="nav_sublinks" to="contactus">
              <div className="nav_icons">
                <span className="nav_text">Contact Us</span>
                <IoMdArrowDropdown className="icons" />
              </div>
            </Link>
            <Link className="nav_sublinks" to="support">
              <div className="nav_icons">
                <span className="nav_text">Support</span>
                <IoMdArrowDropdown className="icons" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
