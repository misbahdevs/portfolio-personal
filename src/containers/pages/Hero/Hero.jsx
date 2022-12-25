import React from "react";
import "./Hero.css";
import HeroSvg from "../../../assets/img/icons/hero.svg";

const Hero = () => {
  setTimeout(() => {
    let data = document.querySelector("html body a.spline-watermark");
    console.log(data);
  }, 5000);

  return (
    <section id="hero">
      <div className="container x-content">
        <div className="x-left">
          <span>Hi, Im Misbah</span>
          <h1>Frontend Developer with 2 years experience</h1>
          <p>
            Im experience to develop, produce, and maintain comporate website
            and web user interfaces. Has designed and developed +3 agency and
            non-agency web applications. Are looking for companies engaged in IT
            to help develop web applications and software.
          </p>
          <div className="action-hero">
            <button className="btn btn-more">
              <i className="uil uil-file-download"></i> My CV
            </button>
            <div className="box-sosmed">
              <span>
                <i className="uil uil-github"></i>
              </span>
              <span>
                <i className="uil uil-instagram-alt"></i>
              </span>
              <span>
                <i className="uil uil-whatsapp-alt"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="x-right">
          <img src={HeroSvg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
