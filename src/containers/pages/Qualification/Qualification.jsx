import React from "react";
import "./Qualification.css";
import { GlobalConsumer } from "../../../config/context/Context";

const handleClick = (event) => {
  let target = event.target;
  let buttonAll = document.querySelectorAll(".qualification-action button");
  buttonAll.forEach((btn) => btn.classList.remove("active"));
  target.classList.add("active");
};

const Qualification = (props) => {
  return (
    <section id="qualification">
      <div className="container x-content">
        <h2>Qualification</h2>
        <div className="content">
          <div className="qualification-action">
            <button
              id="education-formal"
              type="button"
              className="btn btn-more active"
              onClick={(event) => {
                props.dispatch({ type: "get_qualification-formal" });
                handleClick(event);
              }}
            >
              Education
            </button>
            <button
              id="education-nonformal"
              type="button"
              className="btn btn-more"
              onClick={(event) => {
                props.dispatch({ type: "get_qualification-nonformal" });
                handleClick(event);
              }}
            >
              Education (Non Formal)
            </button>
            <button
              id="work"
              type="button"
              className="btn btn-more"
              onClick={(event) => {
                props.dispatch({ type: "get_work" });
                handleClick(event);
              }}
            >
              Work
            </button>
          </div>
          <div className="qulification-flow">
            <div className="qualification-content">
              {props.state.chooseQualification.map((data, i) => {
                if (i === 0 || i % 2 === 0) {
                  if (i === props.state.chooseQualification.length - 1) {
                    return (
                      <div key={i} className="qualification-data">
                        <div>
                          <h3>{data.jurusan}</h3>
                          <h5>{data.institusi}</h5>
                          <div className="qualification-time">
                            <i className="uil uil-calendar-alt"></i>
                            {data.rangeWaktu}
                          </div>
                        </div>

                        <div>
                          <span className="rounder"></span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="qualification-data">
                        <div>
                          <h3>{data.jurusan}</h3>
                          <h5>{data.institusi}</h5>
                          <div className="qualification-time">
                            <i className="uil uil-calendar-alt"></i>
                            {data.rangeWaktu}
                          </div>
                        </div>

                        <div>
                          <span className="rounder"></span>
                          <span className="line"></span>
                        </div>
                      </div>
                    );
                  }
                } else {
                  if (i === props.state.chooseQualification.length - 1) {
                    return (
                      <div key={i} className="qualification-data">
                        <div></div>

                        <div>
                          <span className="rounder"></span>
                        </div>

                        <div>
                          <h3>{data.jurusan}</h3>
                          <h5>{data.institusi}</h5>
                          <div className="qualification-time">
                            <i className="uil uil-calendar-alt"></i>
                            {data.rangeWaktu}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="qualification-data">
                        <div></div>

                        <div>
                          <span className="rounder"></span>
                          <span className="line"></span>
                        </div>

                        <div>
                          <h3>{data.jurusan}</h3>
                          <h5>{data.institusi}</h5>
                          <div className="qualification-time">
                            <i className="uil uil-calendar-alt"></i>
                            {data.rangeWaktu}
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
              {/* <div className="qualification-data">
                <div>
                  <h3>Teknik Komputer dan Jaringan</h3>
                  <h5>SMK Negeri 1 Cijulang</h5>
                  <div className="qualification-time">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2021
                  </div>
                </div>

                <div>
                  <span className="rounder"></span>
                  <span className="line"></span>
                </div>
              </div>

              <div className="qualification-data">
                <div></div>

                <div>
                  <span className="rounder"></span>
                </div>

                <div>
                  <h3>Teknik Informatika</h3>
                  <h5>Sekolah Tinggi Teknologi Bandung</h5>
                  <div className="qualification-time">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2025
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalConsumer(Qualification);
