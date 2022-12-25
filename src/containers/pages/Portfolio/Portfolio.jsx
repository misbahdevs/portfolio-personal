import React from "react";
import "./Portfolio.css";
import gambar1 from "../../../assets/img/1.PNG";
import gambar2 from "../../../assets/img/2.PNG";
import gambar3 from "../../../assets/img/3.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container x-content">
        <h2>Portfolio</h2>
        <div className="content">
          <div className="box-portfolio">
            <div className="image">
              <img src={gambar1} alt="gambar 1" />
            </div>
            <h2>Design Abstract Website Company</h2>
            <div className="action-portfolio">
              <a href="" className="btn btn-outline-more">
                <i className="uil uil-github"></i> Github
              </a>

              <a href="" className="btn btn-more">
                Live Demo
              </a>
            </div>
          </div>

          <div className="box-portfolio">
            <div className="image">
              <img src={gambar2} alt="gambar 2" />
            </div>
            <h2>Design Abstract Website Company</h2>
            <div className="action-portfolio">
              <a href="" className="btn btn-outline-more">
                <i className="uil uil-github"></i> Github
              </a>

              <a href="" className="btn btn-more">
                Live Demo
              </a>
            </div>
          </div>

          <div className="box-portfolio">
            <div className="image">
              <img src={gambar3} alt="gambar 3" />
            </div>
            <h2>Design Abstract Website Company</h2>
            <div className="action-portfolio">
              <a href="" className="btn btn-outline-more">
                <i className="uil uil-github"></i> Github
              </a>

              <a href="" className="btn btn-more">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
