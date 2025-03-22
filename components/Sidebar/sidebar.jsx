import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const sidebar = () => {
  const [extended, setextended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick ={()=>setextended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="logo" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="new chat" />

          {extended ? <p>new chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message" />
              <p>What is react....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="settings" />
           {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="settings" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.settings_icon} alt="settings" />
            {extended ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
