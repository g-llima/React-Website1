import React from "react";
import Know_Card from "./Know_Card";

import "./styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Know_Card icon="fa-brands fa-html5" title="HTML" />
      <Know_Card icon="fa-brands fa-css3-alt" title="CSS3" />
      <Know_Card icon="fa-brands fa-js" title="JavaScript" />
      <Know_Card icon="fa-brands fa-react" title="REACT" />
    </section>
  );
}

export default Skills;
