import React from "react";
import Card5 from "./Card5";

import "./styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id={"skills"}>
      <Card5 icon="fab fa-html5" title="HTML" flipType="left"/>
      <Card5 icon="fab fa-css3-alt" title="CSS3" flipType="up" delay="100"/>
      <Card5 icon="fab fa-js" title="JavaScript" flipType="down" delay="200"/>
      <Card5 icon="fab fa-react" title="REACT" flipType="right" delay="300"/>
    </section>
  );
}

export default Skills;
