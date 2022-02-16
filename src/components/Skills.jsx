import React from "react";
import Card5 from "./Card5";

import "./styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id={"skills"}>
      <Card5 icon="fab fa-html5" title="HTML"/>
      <Card5 icon="fab fa-css3-alt" title="CSS3" />
      <Card5 icon="fab fa-js" title="JavaScript"/>
      <Card5 icon="fab fa-react" title="REACT" />
    </section>
  );
}

export default Skills;
