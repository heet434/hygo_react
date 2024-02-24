
import React from 'react';
import './Landing.css';
import logo from '../assets/logo.png';
import texture from '../assets/textures/texture.png';

function Landing() {

  return (
    <div className="landing" id="landing">
        <div className="landing-overlay">
            <img src={texture}/>
        </div>
        <div className="landing-content">
            <div className="landing-logo">
                <img src={logo} alt="Hygo Logo"/>
            </div>
      </div>
    </div>
  );
}

export default Landing;