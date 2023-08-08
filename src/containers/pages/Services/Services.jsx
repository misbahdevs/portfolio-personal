import React, { useEffect } from "react";
import BoxService from "./Child/BoxService";
import "./Services.css";

const Services = () => {
  const data = [
    [
      "Website creation and development",
      "Web application creation and development",
      "Creation and development of mobile applications",
      "Website loading speed optimization",
      "User interface (UI) creation and development",
      "Integration with external services",
    ],
    [
      "Creation and development of a database management system (DBMS)",
      "API creation and development",
      "Creation and development of integration systems",
      "Manufacture and development of automation systems",
      "Creation and development of security systems",
      "Application maintenance and maintenance",
    ],
    [
      "User research and analysis",
      "User interface (UI) design",
      "Interaction design (IX)",
      "Prototyping",
      "Visual design",
      "Performance analysis",
    ],
  ];

  return (
    <section id="services">
      <div className="container x-content">
        <h2>Services</h2>
        <div className="content">
          <BoxService title="Frontend Developer" data={data[0]} />
          <BoxService title="Backend Developer" data={data[1]} />
          <BoxService title="UI/UX Design" data={data[2]} />
        </div>
      </div>
    </section>
  );
};

export default Services;
