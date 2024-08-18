import React, { useEffect, useState } from "react";
import "./Market.css";
import Loader from "../News/Loader";
import CoinItem from "./CoinItem";
import Button from "./Button";
import Toast from "./Toast";
const Market = () => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);

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

    fetch("https://openapiv1.coinstats.app/coins?limit=100", options)
      .then((response) => response.json())
      .then((response) => {
        setCoins(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const RefreshData = () => {
    var toast_global = true;
    var intervalID = 0;
    setToast(toast_global);
    var id = setInterval(() => {
      if (toast_global) {
        toast_global = false;
        setToast(toast_global);
      } else {
        ClearInterval(intervalID);
      }
    }, 2000);
    intervalID = id;
    //FetchCoins();
  };
  const ClearInterval = (intervalID) => {
    console.log("Clearing called");
    clearInterval(intervalID);
  };

  return (
    <div className="Market">
      <div className="MarketRefresh">
        {toast && <Toast />}
        <Button RefreshData={RefreshData} />
        
      </div>
      <div className="CoinContainer">
        <CoinItem
          name="Crypto"
          price="Price"
          marketCap="MarketCap"
          volume="Volume"
          priceChange1h="1h %"
          priceChange1d="1d %"
          priceChange1w="1w %"
          icon="icon"
        />

        {loading && <Loader caller="m" />}
        {!loading &&
          coins.result.map((e, i) => {
            return <CoinItem key={e.rank} id={e.rank} item={e} />;
          })}
      </div>
    </div>
  );
};

export default Market;
