import React, { useEffect } from "react";
import "./PortFolio.css";
import RightBar from "./RightBar/RightBar";
import Card from "./Card/Card";
import {PortFolioData} from '../Data/Data'
const PortFolio = () => {



  return (
    <div className="PortFolio">
      <div className="PortFolioCard">
        {PortFolioData.map((i)=>{
          return(
            <Card key={i.ticker} ticker={i.ticker} icon={i.icon} value={i.value} price={i.price} color={i.color} />
          )
        })}
      </div>
      
      <RightBar />
    </div>
  );
};

export default PortFolio;
