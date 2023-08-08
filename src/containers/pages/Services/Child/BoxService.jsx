import React from "react";

const BoxService = (props) => {
  return (
    <div className="box-service">
      <div className="sub-header">
        <h3>{props.title}</h3>
      </div>
      <ul>
        {props.data.map((data, i) => {
          return (
            <li key={i}>
              <i className="uil uil-check"></i>
              <p>{data}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoxService;
