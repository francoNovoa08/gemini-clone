import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context.jsx"

const Main = () => {
    
    const {onSent, recentPrompt, showResult, loading, result, setInput, input} = useContext(Context);
  
    return (
    <div className="main">
      <div className="nav">
        <p>Baby's First Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        
        {!showResult 
        ?<>
        <div className="greet">
          <p>
            <span>Hello, arbitrary User</span>
          </p>
          <p>How can discount Gemini help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Draft a thank-you message for an interview I didn't listen to</p>
            <img src={assets.compass_icon} alt="Explore" />
          </div>
          <div className="card">
            <p>Explain recursion using increasingly unhelpful analogies</p>
            <img src={assets.bulb_icon} alt="Explore" />
          </div>
          <div className="card">
            <p>Write a README that sounds written by a 5-year-old</p>
            <img src={assets.message_icon} alt="Explore" />
          </div>
          <div className="card">
            <p>Compare React and Angular in brainrot terms</p>
            <img src={assets.code_icon} alt="Explore" />
          </div>
        </div>  
        </> 
        :
        <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="User" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="Gemini" />
                <p dangerouslySetInnerHTML={{__html: result}}></p>
            </div>
        </div>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here 🥵" />
            <div>
              <img src={assets.gallery_icon} alt="Upload Image" />
              <img src={assets.mic_icon} alt="Record Audio" />
              <img onClick={() => onSent(input)} src={assets.send_icon} alt="Send prompt" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display wildy inaccurate information and has the tendency
            to hallucinate dumb responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
