import React from "react";
import './CoinItem.css'
const CoinItem = (props) => {
    const item=props.item ??props;
    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    
    }
  return (
    <div className="CoinItem">
      <div className="T">
        {item.icon!="icon" &&
        <img src={item.icon} alt="">
        </img>
        }
        <span>{item.name}</span></div>
       <div className={item.priceChange1h!="1h %"? item.priceChange1h<0 ?"H-r":"H-g":"H"}>{item.priceChange1h}</div> 
     
      <div className={item.priceChange1d!="1d %"? item.priceChange1d<0 ?"D-r":"D-g":"D"}>{item.priceChange1d}</div>
      <div className={item.priceChange1w!="1w %"? item.priceChange1w<0 ?"W-r":"W-g":"W"}>{item.priceChange1w}</div>
      <div className="P">{(item.price!="Price" ?"$"+item.price.toFixed(2):item.price)}</div>
      <div className="MC">{item.marketCap!="MarketCap"?convertToInternationalCurrencySystem(item.marketCap):item.marketCap}</div>
      <div className="V24">{item.volume!="Volume"?convertToInternationalCurrencySystem(item.volume):item.volume}</div>
    </div>
  );
};

export default CoinItem;
