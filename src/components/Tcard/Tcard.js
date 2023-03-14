import React from "react";
import "./Tcard.css";

function Tcard({ image, title }) {
  const styles = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="tcard" style={styles}>
      <h2>{title}</h2>
    </div>
  );
}

export default Tcard;
