import React from "react";
import "./styles/Benefits.css";

const cardsList = [
  {
    icon: "fas fa-bug",
    text: "Lacus luctus accumsan tortor posuere ac.",
  },
  {
    icon: "fa-solid fa-clock-rotate-left",
    text: "Lacus luctus accumsan tortor posuere ac.",
  },
  {
    icon: "fa-solid fa-key",
    text: "Lacus luctus accumsan tortor posuere ac.",
  },
  {
    icon: "fa-solid fa-mug-hot",
    text: "Lacus luctus accumsan tortor posuere ac.",
  },
];

function Benefits() {
  return (
    <section className="benefits" id="section-2">
      <div className="benefits__content">
        {/* COMPUTER IMAGE */}
        <img
          className="benefits__img"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        ></img>

        <div className="benefits__texts">
          <h1 className="benefits__texts__title">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <p className="benefits__texts__description">
            Ut ornare lectus sit amet est placerat in egestas erat. Phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc
            mi ipsum faucibus vitae aliquet nec.
          </p>

          {/* BENEFITS CARDS */}
          <div className="benefits__texts__grid">
            {cardsList.map((item, index) => (
              <div className="benefits__texts__grid__item" key={index}>
                <i className={`${item.icon} benefitsIcon`}></i>
                <p className="benefits__texts__grid__item__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
