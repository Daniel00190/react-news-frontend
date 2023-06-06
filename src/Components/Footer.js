// Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <nav className="footer-links">
        <ul>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
          <li>
            <a href="#">Ad Choices</a>
          </li>
          <li>
            <a href="#">Accessibility & CC</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Newsletters</a>
          </li>
          <li>
            <a href="#">Transcripts</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
