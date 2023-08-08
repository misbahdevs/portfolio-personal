import React from "react";

const Box = (props) => {
  return (
    <div className="box-info transition7">
      {props.icon}
      <h3>{props.title}</h3>
      <h4>{props.desc}</h4>
      <a href={props.link} target={"_blank"}>
        send message
      </a>
    </div>
  );
};

export default Box;
