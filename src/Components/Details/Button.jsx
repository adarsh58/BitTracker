import React from "react";
import './Button.css'
const Button = (props) => {
  return (
 
      <button onClick={props.RefreshData}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text">Refresh</span>
      </button>
   
  );
};

export default Button;
