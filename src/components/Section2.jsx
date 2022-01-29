import React from "react";
import "./styles/Section2.css";

function Section2() {
  return (
    <section id="section-2" className="section2">
      <div className="section2__content">
        <img
          className="section2__img"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        ></img>
        <div className="section2__texts">
          <h1 className="section2__texts__title" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="section2__texts__description" data-aos="fade-down">
            Ut ornare lectus sit amet est placerat in egestas erat. Phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc
            mi ipsum faucibus vitae aliquet nec.
          </p>

          <div className="section2__texts__grid">
            <div
              className="section2__texts__grid__item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fas fa-bug section2Icon"></i>
              <p className="section2__texts__grid__item__text">
                Lacus luctus accumsan tortor posuere ac.
              </p>
            </div>
            <div
              className="section2__texts__grid__item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="fal fa-alarm-clock section2Icon"></i>
              <p className="section2__texts__grid__item__text">
                Lacus luctus accumsan tortor posuere ac.
              </p>
            </div>
            <div
              className="section2__texts__grid__item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fal fa-key section2Icon"></i>
              <p className="section2__texts__grid__item__text">
                Lacus luctus accumsan tortor posuere ac.
              </p>
            </div>
            <div
              className="section2__texts__grid__item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fal fa-coffee section2Icon"></i>
              <p className="section2__texts__grid__item__text">
                Lacus luctus accumsan tortor posuere ac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
