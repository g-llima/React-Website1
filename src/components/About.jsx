import React from "react";
import "./styles/About.css";
import Slider from "./Slider";

const sliderItems = [
  {
    title: "Lorem ipsum dolor",
    value: 100,
  },
  {
    title: "Lorem ipsum dolor",
    value: 70,
  },
  {
    title: "Lorem ipsum dolor",
    value: 60,
  },
];

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about__title" data-aos="fade-down">
        About me
      </h1>
      <div className="about__content">
        <div className="about__content__texts">
          <p className="about__content__texts__description" data-aos="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            aliquam nulla facilisi cras fermentum. Et egestas quis ipsum
            suspendisse ultrices gravida. Maecenas accumsan lacus vel facilisis.
          </p>

          {/* SKILLS SLIDERS */}
          <Slider slidersList={sliderItems} />
        </div>

        {/* MAN IMAGE */}
        <img
          className="about__content__img"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </section>
  );
}

export default About;
