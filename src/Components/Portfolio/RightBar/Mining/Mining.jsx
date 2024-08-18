import React, { useState } from "react";
import "./Mining.css";
const Mining = (props) => {
  const [status, setStatus] = useState("Stopped");
  const [connect, setConnect] = useState("Disconnected");
  const [style, setStyle] = useState("red");
  const onchange = (index) => {
    if (index <= 1) {
      if (status === "Running...") {
        setStatus("Stopped");
        setStyle("red");

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-API-KEY': '7Sx4RHCG1F2bdtLS/bnC1trru4ZHddrAaGaIdTe1YfI='
          }
        };
        
        fetch('https://openapiv1.coinstats.app/markets', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
      } else {
        setStatus("Running...");
        setStyle("green");
      }
    }
    else{

        if (connect === "Disconnected") {
            setConnect("Connected");
            setStyle("green");
          } else {
            setConnect("Disconnected");
            setStyle("red");
          }

    }
  };
  return (
    <div className="Mining">
      <div className="Icon">
        <img src={props.icon}></img>
      </div>
      <div className="RightDetails">
        <div className="Title">{props.text}</div>
        <div className="Status" style={{ color: style }}>
          {props.index<=1?status:connect}
        </div>
      </div>
      <div className="Radiobtn">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => onchange(props.index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Mining;
