import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="">
        <div>{props.icon}</div>
        <h3 className="card_title">{props.title}</h3>
      </div>

      <text className="card_ds">{props.description}</text>
      <text>{props.para}</text>
    </div>
  );
}

export default Card;
