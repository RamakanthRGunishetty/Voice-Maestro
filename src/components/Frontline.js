import React from 'react'
import './Frontline.css'
import art from '../images/artists1.png'

const Frontline = () => {
  const handleGetStartedClick = () => {
    window.location.hash = '#Workline'
  }

  return (
    <div className="Frontline" id="Frontline">
      <div className="Artists">
        <img src={art} alt="Art" className="art" />
      </div>
      <div className="main-container">
        <div className="Intro">
          <span>Welcome</span>
          <span>to</span>
          <span>VoiceMaestro</span>
        </div>
        <div className="btn-get">
          <button className="btn-exp" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Frontline
