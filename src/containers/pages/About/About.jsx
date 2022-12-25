import React from "react";
import "./About.css";
import imgAbout from "../../../assets/img/me.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container x-content">
        <h2>About</h2>
        <div className="content">
          <div className="x-left">
            <div className="image">
              <div className="box-img">
                <img src={imgAbout} alt="about" />
              </div>
            </div>
          </div>
          <div className="x-right">
            <div className="box-cell">
              <div className="box">
                <i className="uil uil-award"></i>
                <span className="title-box">Experience</span>
                <span className="desc-box">2 years working</span>
              </div>
              <div className="box">
                <i className="uil uil-users-alt"></i>
                <span className="title-box">Client</span>
                <span className="desc-box">5 official projects</span>
              </div>
              <div className="box">
                <i className="uil uil-folder-open"></i>
                <span className="title-box">Project</span>
                <span className="desc-box">11 + Completed</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              velit, reiciendis ratione natus consequatur praesentium maxime
              accusamus vitae atque officiis corrupti facilis molestias ipsam
              commodi optio nemo totam? Repellat, laborum consectetur officiis
              labore, dolore, nostrum id quidem veritatis quam odio sunt ea
              cupiditate voluptate minus soluta porro? Nulla eaque ipsum
              obcaecati voluptas iure aliquam cupiditate, sunt doloremque,
              consequatur cum molestiae veniam hic odio itaque ut neque aliquid
              et nobis animi deleniti odit deserunt.
            </p>
            <a href="#contact" className="btn btn-more">
              Message Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
