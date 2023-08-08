import React, { useEffect } from "react";
import "./Portfolio.css";
import { GlobalConsumer } from "../../../config/context/Context";

const Portfolio = (props) => {
  return (
    <section id="portfolio">
      <div className="container x-content">
        <h2>Portfolio</h2>
        <div className="content">
          {props.state.dataPortfolio.map((data, i) => {
            return (
              <div className="box-portfolio" key={i}>
                <div className="image">
                  <img src={data.image} alt="gambar 1" />
                </div>
                <h2>{data.title}</h2>
                <div className="action-portfolio">
                  <a
                    href={data.githubUrl}
                    className="btn btn-more"
                    target={"_blank"}
                  >
                    <i className="uil uil-github"></i> Github
                  </a>

                  <a
                    href={data.demoUrl}
                    className="btn btn-more"
                    target={"_blank"}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalConsumer(Portfolio);
