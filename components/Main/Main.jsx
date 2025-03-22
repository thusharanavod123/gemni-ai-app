import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

export const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemeni</p>
        <img src={"assets.user_icon"} alt="menu" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello,Dev</span>
          </p>
          <p>how can i hep you today?...</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>ipl next match?</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="card">
            <p>lets bild this </p>
            <img src={assets.build_icon} alt="compass" />
          </div>
          <div className="card">
            <p>ipl next match?</p>
            <img src={assets.message_icon} alt="compass" />
          </div>
          <div className="card">
            <p>ipl next match?</p>
            <img src={assets.code_icon} alt="compass" />
          </div>
        </div>
        <div className="main-bottom">
            <div className="search-class">
            <input type="text" placeholder="enter promt here ." /> 
                <div>
                <img src={assets.gallery_icon} alt="search" />
                <img src={assets.assets_icon} alt="search" />
                <img src={assets.send_icon} alt="search" />
                </div>    
                
            </div>
        </div>

        <div className="bottom-info">

                thushara navod 

            </div>
      </div>
    </div>
  );
};

export default Main;
