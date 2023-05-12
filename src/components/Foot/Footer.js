import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="music-note">
          <div className="note"></div>
          <div className="note"></div>
          <div className="note"></div>
          <div className="note"></div>
        </div>
        <div className="content">
          <h3 className="footer-title">Music App</h3>
          <nav className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social-media">
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
