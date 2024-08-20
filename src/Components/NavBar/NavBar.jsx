import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  NavBarDataUilChart,
  NavBarDataUilPackage,
  NavBarDataUilUsersAlt,
  NavBarDatalogo,
} from "../Data/Data";
import TextField from "@mui/material/TextField";

const NavBar = () => {
  const [userImage, setUserImage] = useState(
    "https://randomuser.me/api/portraits/women/1.jpg"
  );
  const [userCounter, setUserCounter] = useState(0);
  const [user, setUser] = useState("Linda marry");

  const CallAPI = async () => {
    let parsedData = [];
    let url = `https://randomuser.me/api/`;
    let data = await fetch(url);
    parsedData = await data.json();
    setUser(
      parsedData.results[0].name.first + " " + parsedData.results[0].name.last
    );
  };

  const handleUserIconClick = () => {
    setUserCounter((userCounter) => userCounter + 1);
    setUserImage(
      `https://randomuser.me/api/portraits/women/${userCounter}.jpg`
    );
    CallAPI();
  };
  return (
    <div className="NavBar">
      <div className="Heading">
        <h2>BitTracker</h2>
        <img src={NavBarDatalogo.icon}></img>
      </div>
      <div className="SearchGroup">
        <textarea className ="TextArea" />
        <NavBarDataUilChart.icon />
        <NavBarDataUilPackage.icon />
    
      </div>
      <div className="Link">
          <Link className="nav-link" to="/news">
            News
          </Link>
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </div>
      <div className="User">
        <div className="UserIcon">
          <NavBarDataUilUsersAlt.icon
            onClick={() => handleUserIconClick("first-id")}
          />

          <span>Hi ,{user}</span>
        </div>
        <div className="UserImg">
          <img src={userImage} alt="User"></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
