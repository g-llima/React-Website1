import React from "react";
import FAQ from "./FAQ";
import "./styles/Questions.css";

function Questions() {
  return (
    <section id={"faq"} className="questions">
      <div className="questions__content">
        <h2 className="questions__title">Lorem ipsum dolor sit amet</h2>
        <FAQ />
      </div>
    </section>
  );
}

export default Questions;
