import React from "react";
import "../Skills.css";
import ItemSkill from "./SubChild/ItemSkill";

const BoxSkill = (props) => {
  return (
    <div className="box-skill">
      <h3>{props.title}</h3>
      <div className="list-skills">
        <ItemSkill data={{ data1: props.data[0], data2: props.data[1] }} />
        <ItemSkill data={{ data1: props.data[2], data2: props.data[3] }} />
        <ItemSkill data={{ data1: props.data[4], data2: props.data[5] }} />
      </div>
    </div>
  );
};

export default BoxSkill;
