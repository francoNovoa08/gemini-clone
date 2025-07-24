import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = React.useState(false);
  const { onSent, previousPrompts, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className={`sidebar ${extended ? "expanded" : "collapsed"}`}>
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className={`menu ${extended ? "rotated" : ""}`}
          src={assets.menu_icon}
          alt="Menu"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 13)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.settings_icon} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
