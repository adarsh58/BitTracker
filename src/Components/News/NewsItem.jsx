import React from "react";
import "./NewsItem.css";
const NewsItem = (props) => {
  return (
    <div
      className="NewsCard"
      // style={{
      //   background: props.color.backGround,
      //   boxShadow: props.color.boxShadow,
      // }}
    >
      <div className="UpperCard">
        <div className="CardIcon">
          <img src={props.imgUrl} alt="no" />
        </div>
        <div className="title">{props.title.slice(0, 50)}</div>
      </div>
      <div className="LowerCard">
        <a href={props.sourceLink}>Click here..</a>
        <div className="Source">{props.source.slice(0, 10)}</div>
      </div>
    </div>
  );
};

export default NewsItem;
