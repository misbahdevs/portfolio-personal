import React from "react";

const ItemSkill = (props) => {
  return (
    <div className="skill">
      <div className="box">
        <div>
          <i className="uil uil-check-circle"></i>
        </div>
        <div>
          <p className="name-list-skill">{props.data.data1.tech}</p>
          <p className="desc-list-skill">{props.data.data1.status}</p>
        </div>
      </div>

      <div className="box">
        <div>
          <i className="uil uil-check-circle"></i>
        </div>
        <div>
          <p className="name-list-skill">{props.data.data2.tech}</p>
          <p className="desc-list-skill">{props.data.data2.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSkill;
