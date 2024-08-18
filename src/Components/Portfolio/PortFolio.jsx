
import "./PortFolio.css";
import RightBar from "./RightBar/RightBar";
import Card from "./Card/Card";
import React, { useEffect, useState } from "react";
const PortFolio = () => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    FetchCoins();
  }, []);
  //APi call
  const FetchCoins = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "7Sx4RHCG1F2bdtLS/bnC1trru4ZHddrAaGaIdTe1YfI=",
      },
    };

    fetch("https://openapiv1.coinstats.app/coins?limit=5", options)
      .then((response) => response.json())
      .then((response) => {
        setCoins(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="PortFolio">
      <div className="PortFolioCard">
        {!loading && coins.result.map((i)=>{
          return(
            <Card key={i.symbol} ticker={i.symbol} icon={i.icon} value={i.price} price={i.price} color={i.color} />
          )
        })}
      </div>
      
      <RightBar />
    </div>
  );
};

export default PortFolio;
