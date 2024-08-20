import React, { useEffect, useState } from "react";
import "./NewsContainer.css";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
const NewsContainer = () => {

const [news,setNews]=useState(null);
const [loading,setLoading]=useState(true);

  useEffect(()=>{
    FetchNews();
  },[])
  //APi call
  const FetchNews=()=>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': '7Sx4RHCG1F2bdtLS/bnC1trru4ZHddrAaGaIdTe1YfI='
      }
    };
    
    fetch('https://openapiv1.coinstats.app/news', options)
      .then(response => response.json())
      .then(response => {
        setNews(response);
        setLoading(false);
      })
      .catch(err => console.error(err));

  }
  const color = {
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
  };
  return (
    <div className="NewsContainer">
      {loading && <Loader  caller="n"/>}
      {!loading && <div className="NewsContainerCard" >
        {news.result.map((i) => {
          return (
            <NewsItem
              source={i.source}
              title={i.title}
             
              imgUrl={i.imgUrl}
              sourceLink={i.sourceLink}
            />
          );
        })}
      </div>}
    </div>
  );
};

export default NewsContainer;
