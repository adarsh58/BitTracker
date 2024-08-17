import React from "react";
import "./RightBar.css";
import Mining from "./Mining/Mining";
import { MiningData } from "../../Data/Data";
const RightBar = () => {

  const HandleSwitchClick=(event)=>{
    console.log(event)
  }

  return (
    <div className="RightBar">
      <div className="MiningContainer">
        {MiningData.map((i,index) => {
          return <Mining key={index} index={index} icon={i.icon} text={i.text} HandleSwitchClick={(e)=>HandleSwitchClick(index)} />;
        })}
      </div>
    </div>
  );
};

export default RightBar;
