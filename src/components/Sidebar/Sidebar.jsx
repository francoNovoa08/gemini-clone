import React from 'react';
import './Sidebar.css'; 
import {assets} from '../../assets/assets';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" src={assets.menu_icon} alt="Menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="Message Icon" />
                        <p>Sample query </p>
                    </div>
                </div>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
}

export default Sidebar;