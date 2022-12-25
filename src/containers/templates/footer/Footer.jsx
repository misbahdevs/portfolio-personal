import React from "react";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer id="footer">
      <ScrollToTop smooth color="#2c48d8" width="15" height="15" />
      <div className="container x-content">
        <h1>MISBAH</h1>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#qualification">Qualification</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimoni">Testimoni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="sosmed">
          <span>
            <a href="">
              <i className="uil uil-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i className="uil uil-instagram"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </span>
        </div>
        <p>&copy; MISBAH 2022. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
