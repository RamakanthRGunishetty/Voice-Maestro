import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <nav className="footer-links">
          <ul>
            <li>
              <a href="#Frontline">Frontline</a>
            </li>
            <li>
              <a href="#Infoline">Infoline</a>
            </li>
            <li>
              <a href="#Workline">Workline</a>
            </li>
            <li>
              <a href="#Helpline">Helpline</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="social-container">
        <h3 className="follow">Follow On</h3>
        <a
          href="https://www.youtube.com"
          className="youtube social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className="twitter social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="instagram social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div
        className="copy text-center p-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Copyright:
        <a className="text" href="#Frontline">
          voicemaestro.com
        </a>
      </div>
    </div>
  )
}

export default Footer
