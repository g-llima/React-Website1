import React from "react";
import "./styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__content__texts">
          <h1 className="hero__content__texts__mainText">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="hero__content__texts__secondText">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
          <button className="hero__content__texts__btn">
            Explore Now <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        {/* FLOATING GUY & PC */}
        <img
          src="./imgs/undraw_programming_re_kg9v.svg"
          alt="IMG"
          className="hero__content__img"
        />
      </div>
    </section>
  );
}

export default Hero;
