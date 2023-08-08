import React from "react";
import "../About.css";

const Box = (props) => {
  return (
    <div className="box">
      <div className="icon">{props.icon}</div>
      <span className="title-box">{props.title}</span>
      <span className="desc-box">{props.desc}</span>
    </div>
  );
};

export default Box;
