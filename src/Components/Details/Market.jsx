import React, { useEffect, useState } from "react";
import './Market.css'
import Loader from "../News/Loader";
import CoinItem from './CoinItem'
const Market = () => {
  const [coins,setCoins]=useState(null);
  const [loading,setLoading]=useState(true);
  
    useEffect(()=>{
      FetchCoins();
    },[])
    //APi call
    const FetchCoins=()=>{
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': '7Sx4RHCG1F2bdtLS/bnC1trru4ZHddrAaGaIdTe1YfI='
        }
      };
      
      fetch('https://openapiv1.coinstats.app/coins?limit=100', options)
        .then(response => response.json())
        .then(response => {
          
          setCoins(response);
          setLoading(false);
  
        })
        .catch(err => console.error(err));
  
    }




  return (
    <div className='Market'>
      <div className="CoinContainer">
      <CoinItem name="Crypto" price="Price" marketCap="MarketCap" volume="Volume"
      priceChange1h="1h %" priceChange1d="1d %" priceChange1w="1w %" icon="icon"/>
       {loading && <Loader caller="m"/>}
       {!loading && coins.result.map((e,i)=>{
return(
 
  <CoinItem id={e.rank} item={e}/>
  
)

        })}
      </div>
    </div>
  )
}

export default Market
