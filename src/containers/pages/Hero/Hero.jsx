import React, { useEffect } from "react";
import "./Hero.css";
import HeroSvg from "../../../assets/img/icons/hero.svg";
import gsap, { Power2 } from "gsap";

const tl = gsap.timeline();

const Hero = () => {
  useEffect(() => {
    tl.from(".stagger1", {
      y: "-50",
      opacity: 0,
      stagger: 0.3,
      duration: 2,
      ease: Power2.easeOut,
    });
  }, []);

  setTimeout(() => {
    let data = document.querySelector("html body a.spline-watermark");
    console.log(data);
  }, 3000);

  return (
    <section id="hero">
      <div className="container x-content">
        <div className="x-left">
          <span className="stagger1">Hi, Im Misbah</span>
          <h1 className="stagger1">
            Frontend Developer with 2 years experience
          </h1>
          <p className="stagger1">
            I have experience developing, producing and maintaining corporate
            websites and web user interfaces. Has designed and developed 3
            agency and 1 non-agency web applications. Currently looking for a
            company engaged in IT to help develop web applications and software.
          </p>
          <div className="action-hero">
            <a
              href="https://drive.google.com/file/d/1stZISiZUQhScUsmp0qHYbVxgT03vyjKq/view?usp=share_link"
              className="btn btn-more stagger1"
              target={"_blank"}
            >
              <i className="uil uil-file-download"></i> My CV
            </a>
            <div className="box-sosmed stagger1">
              <a href="https://github.com/misbahdevs" target={"_blank"}>
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://www.instagram.com/misbahhlmnr_/"
                target={"_blank"}
              >
                <i className="uil uil-instagram-alt"></i>
              </a>
              <a href="https://wa.me/6285641054319" target={"_blank"}>
                <i className="uil uil-whatsapp-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="x-right">
          <img src={HeroSvg} alt="hero" className="stagger1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
