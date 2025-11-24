import React from "react";
import './Hero.css'

import diamoimg from '../Assets/diabg-removebg-preview.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">    
                        <p>New</p>
                        <img src={diamoimg} alt=""/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection </div>
                </div>
            </div>
            <div className="hero-right">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Hero