import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Baby's First Gemini</p>
            <img src={assets.user_icon} alt="User" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, arbitrary User</span></p>
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
        </div>
    </div>
  )
}

export default Main