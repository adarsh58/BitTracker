import React from "react";
import "./Card.css";
const Card = (props) => {
  const icon = props.icon;
  return (
    <div
      className="Card"
    
    >
      <div className="UpperCard">
        <div className="CardIcon">
          <img src={icon} alt="" />
          
        </div>
        <div className="Ticker">{props.ticker}</div>
      </div>
      <div className="LowerCard">
       
        <div className="Price">{props.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Card;
