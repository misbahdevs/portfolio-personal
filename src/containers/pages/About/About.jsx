import React, { useEffect } from "react";
import "./About.css";
import imgAbout from "../../../assets/img/me.jpg";
import Box from "./Child/Box";

const About = () => {
  let icon = [
    <i className="uil uil-award"></i>,
    <i className="uil uil-users-alt"></i>,
    <i className="uil uil-folder-open"></i>,
  ];
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
              <Box icon={icon[0]} title="Experience" desc="2 years working" />
              <Box icon={icon[1]} title="Client" desc="4 official projects" />
              <Box icon={icon[2]} title="Project" desc="8 + Completed" />
            </div>
            <p className="transition1">
              I am Misbah, a Frontend Developer with an educational background
              in Informatics Engineering and have experience in this field for 2
              years. I love that job associated with the interface / UI, and
              always interested in looking for the best solution in every
              project I work on. I also really enjoy working in a team and
              helping people others achieve common goals.<br></br>
              <br></br>
              My best work experiences are when I work on projects Website
              Interior Design, where I was assigned to code from the design that
              has been provided, and successfully completed on time. I have
              learned a lot and feel commendable for my contribution to the
              project.<br></br>
              <br></br>I believe that my abilities and experience can help me in
              working on future projects and work.
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
