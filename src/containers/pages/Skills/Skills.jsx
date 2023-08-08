import React, { useEffect } from "react";
import BoxSkill from "./Child/BoxSkill";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container x-content">
        <h2>Skills</h2>
        <div className="content">
          <div className="x-left">
            <BoxSkill
              title="Frontend Development"
              data={[
                {
                  tech: "HTML",
                  status: "Experienced",
                },
                {
                  tech: "CSS",
                  status: "Experienced",
                },
                {
                  tech: "Javascript",
                  status: "Experienced",
                },
                {
                  tech: "Bootstrap",
                  status: "Experienced",
                },
                {
                  tech: "Talwind",
                  status: "Experienced",
                },
                {
                  tech: "React",
                  status: "Experienced",
                },
              ]}
            />
          </div>
          <div className="x-right">
            <BoxSkill
              title="Backend Development"
              data={[
                {
                  tech: "PHP",
                  status: "Experienced",
                },
                {
                  tech: "MySQL",
                  status: "Experienced",
                },
                {
                  tech: "Node JS",
                  status: "Advanced",
                },
                {
                  tech: "Mongo DB",
                  status: "Advanced",
                },
                {
                  tech: "Python",
                  status: "Experienced",
                },
                {
                  tech: "Firebase",
                  status: "Experienced",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
