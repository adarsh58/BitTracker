import React from "react";
import "./Card.css";
const Card = (props) => {
  const icon = props.icon;
  return (
    <div
      className="Card"
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className="UpperCard">
        <div className="CardIcon">
          <img src={icon} alt="" />
        </div>
        <div className="Ticker">{props.ticker}</div>
      </div>
      <div className="LowerCard">
        {" "}
        <div className="Price">{props.price}</div>
        <div className="Value">{props.value}</div>
      </div>
    </div>
  );
};

export default Card;
